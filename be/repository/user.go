package repository

import (
	"github.com/igordgz/bff-cypress/entity"
)

type userRepository struct {
	db []entity.User
}

func NewUserRepository(db []entity.User) entity.UserRepository {
	return &userRepository{
		db: db,
	}
}

func (u userRepository) Create(user entity.User) (string, error) {
	user.ID = "1"
	u.db = append(u.db, user)

	return user.ID, nil
}
