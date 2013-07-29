class HomeController < ApplicationController
	def index
	end

	def create
		@user = User.create(params[:items])
		respond_to do |format|
			format.html
			format.json {render :jason => @user}
		end
	end
end
