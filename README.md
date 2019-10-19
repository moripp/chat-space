## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|e_mail|text|null: false|
|pass|varchar|null: false|

### Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :groups_users

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|text||

### Association
- has_many : massages
- has_many :users, through: :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user