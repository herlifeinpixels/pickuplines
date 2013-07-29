class PickupMailer < ActionMailer::Base
  default from: "from@example.com"

  def pickup_email(user, line)
  	@user = user
  	@line = line
    @url  = 'localhost:3000/mail'
    mail(to: @user.email, subject: 'Hey baby')
  end
end
