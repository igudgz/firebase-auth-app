package http

import (
	"net/http"

	"github.com/igordgz/bff-cypress/entity"
	"github.com/labstack/echo/v4"
)

type UserHandler struct {
	UserUsecase entity.UserUsecase
}

func NewUserHandler(e *echo.Echo, userUsecase entity.UserUsecase) {
	handler := &UserHandler{
		UserUsecase: userUsecase,
	}

	e.POST("/user", handler.Create)
	// e.GET("/user/:id", handler.GetByID)

}

func (h *UserHandler) Create(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func (h *UserHandler) GetByID(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
