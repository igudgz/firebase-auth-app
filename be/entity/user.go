package entity

import (
	"errors"
	"net/mail"
	"time"
)

type User struct {
	ID        string    `json:"id"`
	UUID      string    `json:"uuid"`
	Name      string    `json:"name" validate:"required"`
	Email     string    `json:"email" validate:"required"`
	UpdatedAt time.Time `json:"updated_at"`
	CreatedAt time.Time `json:"created_at"`
}

func (u *User) Validate() error {
	if u.Name == "" {
		return errors.New("Usuario sem nome")
	}

	_, err := mail.ParseAddress(u.Email)
	if err != nil {
		return errors.New("Email invalido")
	}

	return nil
}

type UserUsecase interface {
	Create(user User) (string, error)
	// GetByID(ctx context.Context, id int64) error
}

type UserRepository interface {
	Create(user User) (string, error)
	// GetByID(ctx context.Context, id int64) error
}
