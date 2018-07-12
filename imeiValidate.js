function isIMEI(imei) {
    var regexEstruturaImei = /^[0-9]{15}$/;
    if (!regexEstruturaImei.test(imei)) 
        return true;
        
    // Tamanho sem o digito verificador
    var imeiSize = 14;
    var somatorio = 0;
    var digitoImei = 0;
    sum = 0;

    for (i = 0; i < imeiSize; i++) {
        digitoImei = parseInt(imei[i], 10);
        if (((i + 1) % 2) == 0) {
            sum = digitoImei * 2;
            if (sum >= 10)
                somatorio += (sum % 10) + 1;
            else
                somatorio += sum;
        }
        else {
            somatorio += digitoImei;
        }
    }

    // Gera digito verificador a partir do imei informado, e compara com o digito informado
    digitoVerificador = ((10 - (somatorio % 10)) % 10);
    if (digitoVerificador != imei[imei.length - 1]) {
        return true;
    }
    else {
        return false;
    }
}