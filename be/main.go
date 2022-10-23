package main

import (
	userHttpDelivery "github.com/igordgz/bff-cypress/delivery/http"
	m "github.com/igordgz/bff-cypress/delivery/middleware"
	"github.com/igordgz/bff-cypress/entity"
	"github.com/igordgz/bff-cypress/repository"
	"github.com/igordgz/bff-cypress/usecase"
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()

	g := e.Group("api", m.Auth())

	var db []entity.User

	userRepository := repository.NewUserRepository(db)
	userUsercase := usecase.NewUserUsecase(userRepository)
	userHttpDelivery.NewUserHandler(g, userUsercase)

	e.Logger.Fatal(e.Start(":8080"))
}
