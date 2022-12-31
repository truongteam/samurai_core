class Users::RegistrationsController < Devise::RegistrationsController
  def create
    u = Samurai::CreateUser.new
    res = u.(registration_paramss.to_h.deep_symbolize_keys)
    if res.success?
      redirect_to new_user_session_path
    else
      redirect_to new_user_registration_path
    end
  end

  private

  def registration_paramss
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
