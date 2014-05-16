class User < RedisOrm::Base
  # Использовать случайно сгенирированый ИД
   use_uuid_as_id

  # Типы полей в базе данных
  property :id, String
  property :name, String
  property :email, String

  # Поля по которым будет происходить поиск в базе
  index :id
  index :name
  index :email

# Функции возвращиют последний обект, если не указано, что конкретно возвращать
# Сделано чтобы убрать лишнии поля которые возращяет класс User из Redis

  def as_json (options = {})
    {
        id: id,
        name: name,
        email: email
    }
  end
end
