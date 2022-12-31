class ApplicationReflex < StimulusReflex::Reflex
  delegate :current_user, to: :connection

  before_reflex do
    # Current.user = current_user
  end
end
