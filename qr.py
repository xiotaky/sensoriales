import qrcode

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
qr.add_data("https://xiotaky.github.io/pag/")
qr.make(fit=True)

img = qr.make_image(fill_color="purple", back_color="white")
img.save("qr_libro_sensorial_morado.png")
print("QR morado generado correctamente.")