Rails.application.routes.draw do

  root 'collections#index'
  get 'collections' => 'collections#index'
  get 'collections/new' => 'collections#new'
  get 'collections/:id' => 'collections#show', as: :collection
  post 'collections' => 'collections#create'


  # get 'arts' => 'arts#index'  # display a list of all arts
  # get 'arts/new' => 'arts#new'  # return an HTML form for uploading a new art
  # post 'arts' => 'arts#create'  # upload a new art
  # get 'arts/:id' => 'arts#show', as: :art  # display a specific art
  # get 'arts/:id/edit' => 'arts#edit', as: :art  # return an HTML form for editing an art
  # patch 'arts/:id' => 'arts#update', as: :art  # update a specific art
  # delete 'arts/:id' => 'arts#destroy', as: :art  # delete a specific art


  get 'signup'  => 'users#new'
  resources :users
  post 'signup'  => 'users#create'

  get 'login'  => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'


  get 'cleaner' => 'clean#clean'
  # DatabaseCleaner is a set of strategies for cleaning database in Ruby during tests

end
