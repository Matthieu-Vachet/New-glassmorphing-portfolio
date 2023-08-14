# Vendors

Enfin, vous aurez probablement besoin d’un dossier vendors/ contenant tous les fichiers CSS et Sass en provenance de librairies ou de frameworks externes à votre projet. Bootstrap, JQuery, Vuetify… Tout ce qui vient de l’extérieur se range dans ce dossier ! Les placer au même endroit, bien séparé du reste permet de distinguer rapidement ce qui est de votre responsabilité de ce qui ne l’est pas.

bootstrap.scss
vuetify.scss
D3.scss
...


Si vous avez besoin de surcharger le comportement de certaines portions du code de ces fournisseurs externes, vous pouvez ajouter ces fichiers en les préfixant, ou même créer un nouveau dossier vendors-extensions/ afin de maintenir au maximum cette séparation de la responsabilité.

