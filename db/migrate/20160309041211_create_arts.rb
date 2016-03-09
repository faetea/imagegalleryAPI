class CreateArts < ActiveRecord::Migration
  def change
    create_table :arts do |t|
      t.text :caption
      t.string :image
      t.references :collection
      t.timestamps null: false
    end
  end
end
