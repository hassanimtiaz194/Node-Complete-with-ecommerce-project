exports.get404 = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    path: "",
  }); // we are already in root folder so no need of ../
};
