class UsersController < ApplicationController
  # Действия перед ответом на запрос
  before_action :set_user, only: [:update, :destroy]

  # GET /users
  # GET /users.json

  # Выводит список всех записей и передаёт их в формате ДЖСОН со статусом "ок"
  def index

    # Ищет всех пользователей из диапазона в присланом запросе
    @users = User.all(:limit => params[:limit], :offset => params[:start])

  # Отвечает в формате ДЖСОН масивом юзеры и блоком общее количество юзеров + статус "ок"
    render json: {users: @users, totalCount: User.count}, status: :ok

  end

  # POST /users
  # POST /users.json

  # Действия для создания пользователя
  def create

    # Переводит в глобальную переменую ново созданого пользователя с получеными параметрами
    @user = User.new(user_params)

    # Если пользователь записался в базу отвечает в формате ДЖСОН масивом юзер и статусом создан
    if @user.save
      render json: {user: @user}, status: :created

      # В обратном случае отвечает в формате ДЖСОН с перечнем ошибок и статусом не кооректный ввод
    else
      render json: {user: @user, errors: @user.errors}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json

  # Редактирование пользователя
  def update
    # Изменение найденого ранее пользователя с новыми получеными параметрами
    @user.update_attributes(user_params)

    # Если пользователь обновился с получеными параметрами отвечает в формате ДЖСОН и масивом пользователя и статусом ок
    if @user.update_attributes(user_params)
      render json: {user: @user}, status: :ok

      # В обратном случае отвечает в формате ДЖСОН с перечнем ошибок и статусом не кооректный ввод
    else
      render json: {user: @user, errors: @user.errors}, status: :unprocessable_entity
    end
end

  # DELETE /users/1
  # DELETE /users/1.json

  # Удаление пользователя
  def destroy

    # Удаление ранее найденого пользователя
        @user.destroy
    # Если ранее найденый пользователь удалился отвечает в формате ДЖСОН с масивом пользователя и статусом ок
    if @user.destroy
      render json: {user: @user}, status: :ok

      # В обратном случае отвечает в формате ДЖСОН с перечнем ошибок и статусом не кооректный ввод
    else
      render json: {user: @user, errors: @user.errors}, status: :unprocessable_entity
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.

  # Определяет и записывает пользователя в глобальную переменую по полученому ИД
  def set_user
    @user = User.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.

  # Возвращяет масив из полученых параметров пользователя
  def user_params
    params[:user]
  end
end
