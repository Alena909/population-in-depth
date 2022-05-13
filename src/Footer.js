const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <div className="footer">
      <a href="mailto:yguthrie.dev@gmail.com">yguthrie.dev@gmail.com</a>
      <p>©{date} Yelena Guthrie. All Rights Reserved.</p>
    </div>
  );
};
export default Footer;
