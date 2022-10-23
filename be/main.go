package main

import (
	userHttpDelivery "github.com/igordgz/bff-cypress/delivery/http"
	"github.com/igordgz/bff-cypress/entity"
	"github.com/igordgz/bff-cypress/repository"
	"github.com/igordgz/bff-cypress/usecase"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.Use()

	var db []entity.User

	userRepository := repository.NewUserRepository(db)
	userUsercase := usecase.NewUserUsecase(userRepository)
	userHttpDelivery.NewUserHandler(e, userUsercase)
	e.Logger.Fatal(e.Start(":1323"))
}
