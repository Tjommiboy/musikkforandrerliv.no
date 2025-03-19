function AboutUs() {
  return (
    <div className="container">
      <h1 className="flex justify-center text-2xl font-bold">About Us</h1>
      <div className="flex flex-col items-center gap-8">
        <p className="description">
          MMF was officially founded in Antsirabe, Madagascar, in 2021 by Eline
          Rodvelt Hansen and her husband Dina Rasalina Andriamanalina. The
          history of MMF dates back to 2018 when Eline packed two violins and
          traveled expectantly to Madagascar. While studying the violin at the
          Grieg Academy in Bergen, she had a strong desire to teach children who
          otherwise would not have the opportunity to develop their talents. Her
          dream eventually became to start a music school for the poorest
          children in Madagascar.
        </p>
        <div className="flex justify-center">
          <button className="readMoreButton">Read More</button>
        </div>
        <div className="flex justify-center">
          <img
            className="aboutImages max-w-full h-auto"
            src="/assets/placeholder-images/3baa531a04b524d4090032444534fad9.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
