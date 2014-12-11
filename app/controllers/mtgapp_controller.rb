class MtgappController < ApplicationController
	def show
		@card = MtgCard.all
	end
end
