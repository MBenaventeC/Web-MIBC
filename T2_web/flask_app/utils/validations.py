import re
import filetype

def validate_fv(fv):
    return fv == "fruta" or fv == "verdura"

def validate_fv_opc(selections):
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
    # COMPROBAR QUE ESTÉ BIEN HECHO
    idRegiones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
    return region in idRegiones

def validate_comuna(comuna, region):
    # COMPROBAR QUE ESTÉ BIEN HECHO
    idRegiones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
    if comuna in idRegiones and comuna != "8" and comuna != "16":
        return comuna.startswith(region)
    if comuna == "8":
        return comuna.startswith(region+"02") or comuna.startswith(region+"03") or comuna.startswith(region+"04")
    if comuna == "16":
        return comuna.startswith(region+"01")
    
    return comuna.startswith(region)

def validate_name(name):
    return name != "" and len(name) >= 3 and len(name) <= 80

def validate_mail(mail):
    return "@" in mail

def validate_cell(cellnumber):
    return (len(cellnumber) <= 15 and cellnumber.startswith('+569')) or cellnumber == ""

def validate_form(fv, opcionesFV, description, images, region, comuna, name, mail, cellnumber):
    return validate_fv(fv) and validate_fv_opc(opcionesFV) and validate_description(description) and validate_images(images) and validate_name(name) and validate_region(region) and validate_comuna(comuna, region) and validate_mail(mail) and validate_cell(cellnumber)