module Samurai
    class User < ApplicationRecord
        self.table_name = 'users'
        
        devise :database_authenticatable,
            :registerable,
            :confirmable,
            :recoverable,
            :rememberable,
            :validatable
    end
end