
# CRITERIA
● Mampu menerapkan Service Repository Pattern di dalam sebuah Project. ✓
● Mampu membuat asynchronous function dan menjalankannya. ✓
● Mampu menerapkan Token Based Authentication sebagai metode autentikasi di dalam REST API. ✓
● Mampu membuat Open API Documentation dari REST API yang akan dibuat. ✓

# Definition of Done
● Terdapat endpoint untuk login sebagai superadmin, admin, maupun member. ✓
● Terdapat endpoint untuk melihat daftar mobil yang tersedia. ✓
● Menggunakan Service Repository Pattern dalam membangun project ini. ✓
● Terdapat halaman yang menampilkan dokumentasi API, baik itu menggunakan Swagger UI, Redoc atau Library lain di dalam HTTP Server tersebut. ✓
● Terdapat endpoint yang merespon dengan Open API document dari REST API yang dibangun dalam bentuk JSON. ✓

# REFERENSI PENGERJAAN CHALLENGE 6
● https://youtu.be/Ll_71n60vAM
● https://www.youtube.com/watch?
● https://stackoverflow.com/questions/  63124161attempted-import-error-switch-is-not-exported-from-react-router-domv=-X-AlVlp6N0

# TOOLS
● Visual Studi Code
● XAMPP
● GITBASH
● POSTMAN

# BACKEND
● Dependencies
"bcrypt": "^5.1.0",
"cookie-parser": "^1.4.6",
"cors": "^2.8.5",
"dotenv": "^16.0.3",
"express": "^4.18.2",
"express-session": "^1.17.3",
"jsonwebtoken": "^8.5.1",
"mysql2": "^2.3.3",
"sequelize": "^6.24.0"
nodemon versi global

● Pengujian Menggunakan Postman
Link: https://documenter.getpostman.com/view/24019026/2s84DssfrK (POSTMAN) port: 5000

● Data Users
1. email: hilmy.com
password: 123456
role: superAdmin

2. email: maissy.com
password: 123456
role: admin

3. email: mutiara.com
password: 123456
role: member

● nama db: auth_db
terdapat dua kolom didalam db auth_db yaitu cars dan users

# FYI UNTUK MENJALANKAN PROGRAM/ PENGUJIAN
● Pastikan XAMPP berjalan dengan lancar.
● gitbash di folder backend: nodemon index

 ==============================================================================================================

# FRONTEND
● Dependencies
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.1.3",
"bulma": "^0.9.4",
"jwt-decode": "^3.1.2",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^5.2.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"

● End Poin
1. Login: http://localhost:3000
2. Registrasi: http://localhost:3000/register
3. Dashboard: http://localhost:3000/dashboard

# FYI UNTUK MENJALANKAN PROGRAM/ PENGUJIAN
● Pastikan XAMPP berjalan dengan lancar.
● gitbash di folder frontend: npm start