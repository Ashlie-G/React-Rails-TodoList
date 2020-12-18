class AddBodyToLists < ActiveRecord::Migration[6.0]
  def change
    add_column :lists, :body, :text
  end
end
