package http

import (
	"net/http"

	rc "github.com/igordgz/bff-cypress/delivery/context"
	"github.com/igordgz/bff-cypress/entity"
	"github.com/labstack/echo"
)

type UserHandler struct {
	UserUsecase entity.UserUsecase
}

func NewUserHandler(e *echo.Group, userUsecase entity.UserUsecase) {
	handler := &UserHandler{
		UserUsecase: userUsecase,
	}

	e.POST("/user", wrapCustomContext(handler.Create))
	// e.GET("/user/:id", handler.GetByID)

}

func (h *UserHandler) Create(c *rc.Context) error {
	var user entity.User

	err := c.Bind(&user)
	if err != nil {
		return c.String(http.StatusBadRequest, "bad request")
	}

	id, err := h.UserUsecase.Create(user)
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
	}

	return c.String(http.StatusOK, id)
}

// func (h *UserHandler) GetByID(c echo.Context) error {
// 	return c.String(http.StatusOK, "Hello, World!")
// }
func wrapCustomContext(fn func(c *rc.Context) error) echo.HandlerFunc {
	return func(ctx echo.Context) error {
		return fn(ctx.(*rc.Context))
	}
}
