package entity

import (
	"time"
)

type User struct {
	ID        string    `json:"id"`
	Name      string    `json:"title" validate:"required"`
	Email     string    `json:"content" validate:"required"`
	UpdatedAt time.Time `json:"updated_at"`
	CreatedAt time.Time `json:"created_at"`
}

type UserUsecase interface {
	Create(user User) error
	// GetByID(ctx context.Context, id int64) error
}

type UserRepository interface {
	Create(user User) error
	// GetByID(ctx context.Context, id int64) error
}
