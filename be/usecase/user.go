package usecase

import (
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

func (u userUsecase) Create(user entity.User) error {
	err := u.userRepo.Create(user)
	if err != nil {
		return err
	}

	return nil
}
