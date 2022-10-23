package usecase

import (
	"time"

	"github.com/igordgz/bff-cypress/entity"
)

type userUsecase struct {
	userRepo entity.UserRepository
}

func NewUserUsecase(entity entity.UserRepository) entity.UserUsecase {
	return &userUsecase{
		userRepo: entity,
	}
}

func (u userUsecase) Create(user entity.User) (string, error) {
	if err := user.Validate(); err != nil {
		return "", err
	}

	user.CreatedAt = time.Now()
	user.UpdatedAt = time.Now()

	id, err := u.userRepo.Create(user)
	if err != nil {
		return "", err
	}

	return id, nil
}
