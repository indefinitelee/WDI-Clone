Rails.application.routes.draw do
  resources :robots do
      resources :tasks
    end
# /robots/11 would show a specific robot /robots/11/tasks would show all tasks for
# that robot achieved by nesting routes as above.


  # get 'robots/', to: 'robots#index'

  # get 'robots/:id', to: 'robots#show'

  # post 'robots/', to: 'robots#create'

  # put 'robots/:id', to: 'robots#update'

  # delete 'robots/:id', to: 'robots#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
