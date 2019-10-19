## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|e_mail|text|null: false|
|pass|varchar|null: false|

### Association
- has_many :messages
- has_many :groups, through: :users_groups

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false|
|group_id|integer|null: false|

### Association
- belongs_to :user
- belongs_to :group

