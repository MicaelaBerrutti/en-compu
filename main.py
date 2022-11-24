def on_received_number(receivedNumber):
    serial.write_value("pasos", receivedNumber)
    led.plot(4, 4)
radio.on_received_number(on_received_number)

basic.show_string("Acá estoy")
radio.set_group(42)

def on_forever():
    pass
basic.forever(on_forever)
