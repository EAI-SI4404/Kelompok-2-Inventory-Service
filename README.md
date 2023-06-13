# Kelompok-2-Inventory-Service

## Cara Menjalankan Aplikasi Via Docker

#### https://hub.docker.com/r/bimskuy25/kelompok-2-inventory-service-app/tags

#### 1. Buka di Terminal
```bash
docker pull bimskuy25/kelompok-2-inventory-service-app:v2
```
#### 2. Buka Docker Image dan Run Image yang sudah kalian PULL
![Screenshot 2023-06-13 132732](https://github.com/EAI-SI4404/Kelompok-2-Inventory-Service/assets/82830923/d8737709-2d05-41af-8e6f-c3e24df3ffbb)

### 3. Isi Optional Setting Seperti ini
![Screenshot 2023-06-12 211925](https://github.com/EAI-SI4404/Kelompok-2-Inventory-Service/assets/82830923/920576e0-2811-4a13-bc1f-5634db6865bf)
- Container name : Bebas
- Port : Bebas Sesuai Keinginan misal 1000
- Environtment Variabel : 
  Variabel => ( MONGO_URL ) , 
  Value => ( mongodb+srv://admin:bimskuy25@inventaris.mifkcjy.mongodb.net/Inventory?retryWrites=true&w=majority )


