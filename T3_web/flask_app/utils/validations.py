import re
import filetype

def validate_fv(fv):
    return fv == "fruta" or fv == "verdura"

def validate_fv_opc(fv, opcionesFV):
    if len(opcionesFV) == 0 or len(opcionesFV) > 5:
        return False
    else: 

        # Separar la cadena en una lista de cadenas individuales
        id_list_str = opcionesFV[0].split(',')

        # Convertir la lista de cadenas en una lista de enteros
        id_list_int = list(map(int, id_list_str))

        for opcion in id_list_int:
            if opcion > 62 or (fv == "fruta" and opcion > 37) or (fv == "verdura" and opcion < 38):
                return False
    return True

def validate_description(description):
    return len(description) <= 300

def validate_images(images):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png"}

    if not images:
        return False

    for img in images:
        # check if a file was submitted
        if img is None:
            return False

        # check if the browser submitted an empty file
        if img.filename == "":
            return False
        
        # check file extension
        ftype_guess = filetype.guess(img)
        if ftype_guess.extension not in ALLOWED_EXTENSIONS:
            return False
        # check mimetype
        if ftype_guess.mime not in ALLOWED_MIMETYPES:
            return False
    return True


def validate_region(region):
    idRegiones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
    return region in idRegiones

def validate_comuna(comuna, region):
    idRegionesEsp = ["8", "10", "14", "15", "16"]
    if region == "15":
        return comuna != "" and (comuna.startswith("101") or comuna.startswith("102"))
    
    if region == "8":
        return comuna != "" and (comuna.startswith(region+"02") or comuna.startswith(region+"03") or comuna.startswith(region+"04"))
    
    if region == "10":
        return comuna != "" and (comuna.startswith(region+"02") or comuna.startswith(region+"03") or comuna.startswith(region+"04") or comuna.startswith(region+"05"));
    
    if region == "14":
        return comuna != "" and comuna.startswith("1001")
    
    if region == "16":
        return comuna != "" and comuna.startswith("801")
    
    if region not in idRegionesEsp:
        return comuna != "" and comuna.startswith(region)

def validate_name(name):
    return name != "" and len(name) >= 3 and len(name) <= 80

def validate_mail(mail):
    return "@" in mail

def validate_cell(cellnumber):
    return (len(cellnumber) <= 15 and cellnumber.startswith('+569')) or cellnumber == ""

def validate_product(fv, opcionesFV, description, images, region, comuna, name, mail, cellnumber):
    return validate_fv(fv) and validate_fv_opc(fv, opcionesFV) and validate_description(description) and validate_images(images) and validate_name(name) and validate_region(region) and validate_comuna(comuna, region) and validate_mail(mail) and validate_cell(cellnumber)

def validate_request(fv, opcionesFV, description, region, comuna, name, mail, cellnumber):
    return validate_fv(fv) and validate_fv_opc(fv, opcionesFV) and validate_description(description) and validate_name(name) and validate_region(region) and validate_comuna(comuna, region) and validate_mail(mail) and validate_cell(cellnumber)