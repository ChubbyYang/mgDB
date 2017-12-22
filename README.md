# start mongodb
mongod --dbpath=D:\mongodb\data --port 27017

# connect
mongo

# current db
db

# switched to db test 
use test 

# show collections
show collections

# add/del user
db.addUser('admin','pwd')
db.removeUser('mongodb') 

# insert data
db.user.insert({"name" : "test"})

# some data
use food
db.goods.insert({"goodsId" : 1,"goodsImg" : "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg","goodsName" : "香辣鸡腿堡","price" : 18})

db.goods.insert({"goodsId" : 2,"goodsImg" : "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg","goodsName" : "田园鸡腿堡","price" : 15})

db.goods.insert({"goodsId" : 3,"goodsImg" : "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg","goodsName" : "和风汉堡","price" : 15})

db.goods.insert({"goodsId" : 4,"goodsImg" : "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg","goodsName" : "快乐全家桶","price" : 80})

db.goods.insert({"goodsId" : 5,"goodsImg" : "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg","goodsName" : "脆皮炸鸡腿","price" : 10})

db.goods.insert({"goodsId" : 6,"goodsImg" : "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg","goodsName" : "魔法鸡块","price" : 20})

db.goods.insert({"goodsId" : 7,"goodsImg" : "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg","goodsName" : "可乐大杯","price" : 10})

db.goods.insert({"goodsId" : 8,"goodsImg" : "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg","goodsName" : "雪顶咖啡","price" : 18})

db.goods.insert({"goodsId" : 9,"goodsImg" : "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg","goodsName" : "香脆鸡柳","price" : 20})

