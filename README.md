## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|e_mail|text|null: false|
|pass|varchar|null: false|

### Association
- has_many :messages
- has_many :groups, through: :users_groups

