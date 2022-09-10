# DiyetProject

PROJE RAPORU


DIYETIM UYGULAMASI:
•	Kullanıcılara yemek alışkanlığı konusunda yardımcı olabilecek bir uygulama yapmak.
•	Kullanıcı uygulama içerisinde istediği şekilde bir diyet programı oluşturabilmeli ve yemek menüsü oluşturabilmelidir.
•	Uygulama içerisinde bir yemek hatırlatıcısı oluşturulmalı ve vakit geldiğinde kullanıcıya bildirim gönderilmelidir.
•	Kullanıcılar dilerse alarmı kaldırabilmeli ve güncelleyebilmelidir. Kullanıcılar diyet raporu alabilmeli ve yemek geçmişini görüntüleyip ağırlıklı olarak neleri tercih ettiği kullanıcıya özet olarak sunulmalıdır.
•	Kullanıcılar yemek seçimi yaparken besin değeri bilgileri de dahil edilmeli ve rapor alınırken toplam ve ortalama tüketilen besin değerleri de kullanıcıya sunulmalıdır.


PROJE ADI 
•	DiyetProject
PROJE İÇERIĞI
•	Kullanıcının yemek alışkanlıklarını takip eden ve bilgilendiren bir uygulama.

GEREKSINIMLER
•	Hesap oluşturma
•	Öğün seçme ekranı gösterimi
•	Öğün seçme
•	Diyet Program için yemek seçimi ekran gösterimi
•	Diyet Program için yemek seçim
•	Öğün için yemek menüsü oluşturma
•	Yemek hatırlatıcısı oluşturma ve güncelleme

EK GEREKSINIMLER
•	Yemek hatırlatıcısı mesaj gönderme
•	Diyet raporu hazırlama
•	Diyet özet bilgi hazırlama
•	Yemek seçiminde besin değerleri hesaplanmalı

AKTÖRLER VE AKSIYONLAR
Kullanıcı
•	Kayıt olma
•	Diyet programı oluşturma
•	Öğün oluşturma
•	Hatırlatıcı oluşturma

ADIM ADIM GÖSTERIM

1.	HESAP OLUŞTURMA:
Tanım : Kullanıcı Hesap oluşturma ekranından hesap oluşturuyor.
Olumlu Durum:
•	Kullanıcı hesap oluşturma ekranına girer
•	Kullanıcı kullanıcı adı doldurur
•	Kullanıcı parola doldurur
•	Kullanıcı tekrar parola doldurur
•	Kayıt Ol Butonuna basılır
•	Veritabanı veri yollanır
•	Veritabanı kontrol edilir
•	Kullanıcıya hoşgeldin mesajı gönderilir
Olumsuz Durum: parolalar eşleşmedi 
•	Kullanıcı hesap oluşturma ekranına girer
•	Kullanıcı kullanıcı adı doldurur
•	Kullanıcı parola doldurur
•	Kullanıcı tekrar parola doldurur
•	Kayıt Ol Butonuna basılır
•	Veritabanı veri yollanır
•	Veritabanı kontrol edilir
•	Kullanıcıya parolalar eşlemedi mesajı gönder
Olumsuz Durum: kullanıcı mevcut
•	Kullanıcı hesap oluşturma ekranına girer
•	Kullanıcı kullanıcı adı doldurur
•	Kullanıcı parola doldurur
•	Kullanıcı tekrar parola doldurur
•	Kayıt Ol Butonuna basılır
•	Veritabanı veri yollanır
•	Veritabanı kontrol edilir
•	Kullanıcıya kullanıcı mevcut mesajı gönder

2.	DIYET PROGRAMI OLUŞTURMA:
Tanım : Kullanıcı Diyet programı oluşturma
Olumlu Durum:
•	Öğün seçme ekranına giriş yapılır
•	Öğün seçilir
•	Yemek seçme ekranına giriş gösterilir
•	Yemek seçimi yapılır
•	Öğün Kaydet Butonuna Basılır
•	Veritabanı veri yollanır
•	Öğünler veri tabanına kaydedilir
•	Ana sayfaya yönlendirilir
Olumsuz Durum: yemek seçilemedi 
•	Öğün seçme ekranına giriş yapılır
•	Öğün seçilir
•	Yemek seçme ekranına giriş gösterilir
•	Yemek seçimi yapılır
•	Öğün Kaydet Butonuna Basılır
•	Veritabanı veri yollanır
•	Veritabanı denetlenir
•	Hata mesajı gönderilir
3.	HATIRLATICI OLUŞTURMA:
Tanım : Kullanıcı hatırlatıcı oluşturur
Olumlu Durum:
•	Ayarlar sayfasına geçilir
•	Öğün hatırlatıcı seçenegi doğru olarak değiştirilir
•	Öğün hatırlatıcı saati ayarlanır
•	Kaydet butonuna tıklanır 
•	Veri tabanına yollanır 
•	Veri kaydedilir
Olumsuz Durum: hatırlatıcı kaydedilemedi 
•	Ayarlar sayfasına geçilir
•	Öğün hatırlatıcı seçenegi doğru olarak değiştirilir
•	Öğün hatırlatıcı saati ayarlanır
•	Kaydet butonuna tıklanır 
•	Veri tabanına yollanır 
•	Hata mesajı gönderilir
