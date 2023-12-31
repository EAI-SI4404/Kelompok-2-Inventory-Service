# Kelompok-2-Inventory-Service

## Cara Menjalankan Aplikasi Via Docker

#### https://hub.docker.com/r/bimskuy25/kelompok-2-inventory-service-app/tags

#### 1. Buka di Terminal
```bash
docker pull bimskuy25/kelompok-2-inventory-service-app:v2
```
#### 2. Buka Docker Image dan Run Image yang sudah kalian PULL
![Screenshot 2023-06-13 132732](https://github.com/EAI-SI4404/Kelompok-2-Inventory-Service/assets/82830923/d8737709-2d05-41af-8e6f-c3e24df3ffbb)

#### 3. Isi Optional Setting Seperti ini
![Screenshot 2023-06-12 211925](https://github.com/EAI-SI4404/Kelompok-2-Inventory-Service/assets/82830923/920576e0-2811-4a13-bc1f-5634db6865bf)
- Container name : Bebas
- Port : Bebas Sesuai Keinginan misal 1000
- Environtment Variabel : 
  Variabel => ( MONGO_URL ) , 
  Value => ( mongodb+srv://admin:bimskuy25@inventaris.mifkcjy.mongodb.net/Inventory?retryWrites=true&w=majority )
  
#### 4. Jalankan Di Container Docker Dengan Log seperti pada gambar ini
![Screenshot 2023-06-13 133330](https://github.com/EAI-SI4404/Kelompok-2-Inventory-Service/assets/82830923/bc717569-05c0-4aa8-97a1-623d50472fc6)

#### 5. Jalankan Pada Postman dengan link sebagai berikut
#### Brand
```bash
GET : http://localhost:(Port Yang Sesuai)/api/brand
GET : http://localhost:(Port Yang Sesuai)/api/brand/{id}
```
```bash
POST : http://localhost:(Port Yang Sesuai)/api/brand/search
```
- Ke body dan ubah dari TEXT menjadi JSON, Kemudian cari sesuai dengan keinginan. Contoh:
```bash
{
    "name":"Hyundai"
}
```

#### Carmodel
```bash
GET : http://localhost:(Port Yang Sesuai)/api/carmodel
GET : http://localhost:(Port Yang Sesuai)/api/carmodel/{id}
```
```bash
POST : http://localhost:(Port Yang Sesuai)/api/carmodel/search
```
- Ke body dan ubah dari TEXT menjadi JSON, Kemudian cari sesuai dengan keinginan. Contoh:
```bash
{
    "year" : "2020"
}
```
#### Stock
```bash
GET : http://localhost:(Port Yang Sesuai)/api/stock
GET : http://localhost:(Port Yang Sesuai)/api/stock/{id}
```
```bash
POST : http://localhost:(Port Yang Sesuai)/api/stock/search
```
- Ke body dan ubah dari TEXT menjadi JSON, Kemudian cari sesuai dengan keinginan. Contoh:
```bash
{
    "carmodels" : "6487141292a83e92c3baeb1b"
}
