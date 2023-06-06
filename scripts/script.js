// Configuração upload de avatar
function updateAvatarDisplay() {
  const curFiles = inputAvatar.files;

  if (curFiles.length > 0) {
    const [file] = curFiles;

    previewAvatarSrc.src = URL.createObjectURL(file);
    buttonUploadAvatar.style.display = "none";
    avatarClose.style.display = "block";
  } else {
    previewAvatarSrc.src = "";
    buttonUploadAvatar.style.display = "block";
    avatarClose.style.display = "none";
  }
}

function clearAvatarPreview() {
  inputAvatar.value = "";
  previewAvatarSrc.src = "";
  buttonUploadAvatar.style.display = "block";
  avatarClose.style.display = "none";
}

const inputAvatar = document.querySelector("input[name=image-avatar]");
const previewAvatarSrc = document.querySelector(".preview-avatar-src");
const buttonUploadAvatar = document.querySelector(".button-upload-avatar");
const avatarClose = document.querySelector(".avatar-close");

inputAvatar.style.opacity = 0;
buttonUploadAvatar.style.display = "block";
avatarClose.style.display = "none";

inputAvatar.addEventListener("change", updateAvatarDisplay);

// Configuração upload de imagem
function updateImageDisplay() {
  const curFiles = input.files;

  if (curFiles.length > 0) {
    const [file] = curFiles;

    previewImageSrc.src = URL.createObjectURL(file);
    previewImage.style.display = "block";
    buttonUpload.style.display = "none";
  } else {
    previewImageSrc.src = "";
    previewImage.style.display = "none";
    buttonUpload.style.display = "block";
  }
}

function clearImagePreview() {
  input.value = "";
  previewImageSrc.src = "";
  previewImage.style.display = "none";
  buttonUpload.style.display = "block";
}

const input = document.querySelector("input[name=image_uploads]");
const previewImage = document.querySelector(".preview-image");
const previewImageSrc = document.querySelector(".preview-image-src");
const buttonUpload = document.querySelector(".button-upload");

input.style.opacity = 0;
previewImage.style.display = "none";
buttonUpload.style.display = "block";

input.addEventListener("change", updateImageDisplay);

// Programação do formulário de perfil

// Selecionar campos
// Campo nome
var formularioFoiEnviado = false;

const inputNome = document.querySelector("input[name=nome]");
document.querySelector("#msg-error-nome").style.display = "none";
inputNome.addEventListener("input", function () {
  validarCampos();
});

// Campo descrição
const inputDescricao = document.querySelector("textarea[name=descricao]");
document.querySelector("#msg-error-descricao").style.display = "none";
inputDescricao.addEventListener("input", function () {
  validarCampos();
});

// Campo post
const inputPost = document.querySelector("textarea[name=post]");
document.querySelector("#msg-error-post").style.display = "none";
inputPost.addEventListener("input", function () {
  validarCampos();
});

// Campo oportunidade
const inputOportunidade = document.querySelector(
  "textarea[name=oportunidade-input]"
);
document.querySelector("#msg-error-oportunidade").style.display = "none";
inputOportunidade.addEventListener("input", function () {
  validarCampos();
});

// Campo link oportunidade
const inputLinkOportunidade = document.querySelector(
  "input[name=oportunidade-link]"
);
document.querySelector("#msg-error-link-oportunidade").style.display = "none";
inputLinkOportunidade.addEventListener("input", function () {
  validarCampos();
});

// Campo categoria
const inputCategoria = document.querySelector("select[name=categoria]");
document.querySelector("#msg-error-categoria").style.display = "none";
inputCategoria.addEventListener("change", function () {
  validarCampos();
});

// Campo area
const inputArea = document.querySelector("select[name=area]");
document.querySelector("#msg-error-area").style.display = "none";
inputArea.addEventListener("change", function () {
  validarCampos();
});

// Validação dos campos
function validarCampos() {
  var formularioValido = true;

  if (!formularioFoiEnviado) {
    return;
  }

  if (inputNome.value == "") {
    document.querySelector("#msg-error-foto").style.display = "block";
    formularioValido = false;
  } else {
    document.querySelector("#msg-error-foto").style.display = "none";
  }

  if (inputNome.value == "") {
    document.querySelector("#msg-error-nome").style.display = "block";
    formularioValido = false;
  } else {
    document.querySelector("#msg-error-nome").style.display = "none";
  }

  if (inputDescricao.value == "") {
    document.querySelector("#msg-error-descricao").style.display = "block";
    formularioValido = false;
  } else {
    document.querySelector("#msg-error-descricao").style.display = "none";
  }

  if (inputPost.value == "") {
    document.querySelector("#msg-error-post").style.display = "block";
    formularioValido = true;
  } else {
    document.querySelector("#msg-error-post").style.display = "none";
  }

  if (inputOportunidade.value == "") {
    document.querySelector("#msg-error-oportunidade").style.display = "block";
    formularioValido = true;
  } else {
    document.querySelector("#msg-error-oportunidade").style.display = "none";
  }

  if (inputLinkOportunidade.value == "") {
    document.querySelector("#msg-error-link-oportunidade").style.display =
      "block";
    formularioValido = true;
  } else {
    document.querySelector("#msg-error-link-oportunidade").style.display =
      "none";
  }

  if (inputCategoria.selectedIndex == 0) {
    document.querySelector("#msg-error-categoria").style.display = "block";
    formularioValido = false;
  } else {
    document.querySelector("#msg-error-categoria").style.display = "none";
  }

  if (inputArea.selectedIndex == 0) {
    document.querySelector("#msg-error-area").style.display = "block";
    formularioValido = false;
  } else {
    document.querySelector("#msg-error-area").style.display = "none";
  }

  return formularioValido;
}

const buttonPerfil = document.querySelector("#publicar-perfil");

// modal
const modal = document.querySelector(".modal-feedback");

function closeModal() {
  modal.style.display = "none";
}

buttonPerfil.addEventListener("click", function (event) {
  event.preventDefault();

  formularioFoiEnviado = true;
  if (validarCampos()) {
    modal.style.display = "block";
    modal.querySelector(".modal-feedback-text").innerHTML =
      "Perfil publicado com sucesso!";
  } else {
    modal.style.display = "block";
    modal.querySelector(".modal-feedback-text").innerHTML =
      "Preencha todos os campos obrigatórios!";
  }
});

function limparCampo(campo) {
  document.querySelector(campo).value = "";
}
