import React from 'react';

function About() {
  const today = new Date();

  return (
    <div id='about' style={{color: 'white'}}>
      <h1>About</h1>
      <p>{today.toLocaleDateString()}</p>
      <p style={{ fontSize: '12px', fontFamily: 'JetBrains Mono' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo velit eius obcaecati culpa fugit odit assumenda tempora minima nostrum pariatur, alias delectus ipsam consequatur quam aut voluptas quas impedit possimus fugiat distinctio commodi quos saepe quod ab. Incidunt quisquam temporibus quam porro. Consequatur assumenda nostrum harum. Nobis possimus doloribus sequi ratione nesciunt adipisci rem quos soluta dignissimos, ipsa, ducimus iure animi et voluptates nihil mollitia voluptas voluptatum delectus culpa perspiciatis magni? Illo ut possimus distinctio officia eius dignissimos quos dolorum, in, exercitationem, magnam quidem impedit! Magnam odio, neque qui quam cum atque error, amet quidem dignissimos, beatae corporis. Assumenda, repudiandae. ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora perspiciatis rerum animi. Ab error aspernatur dignissimos quo, fugiat consectetur distinctio ex ea repudiandae. Ipsam odio veniam sunt laborum adipisci optio atque aut exercitationem quas similique voluptatem at ullam aperiam dolores sequi eum amet eligendi doloremque ab mollitia, ipsum non? Debitis ipsum vitae tenetur iste ex placeat illo enim odit magnam minus odio repudiandae aliquam necessitatibus itaque voluptates perferendis, explicabo praesentium molestiae perspiciatis! Velit exercitationem ducimus labore ratione consectetur error nisi inventore beatae cum vel? Quae ullam omnis nesciunt veritatis neque. Earum quidem illo rem deserunt nesciunt sit maxime optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam iure quo earum, reprehenderit rem magnam velit quos impedit vero delectus cumque molestiae exercitationem laboriosam eveniet suscipit expedita perferendis voluptas similique. Dolore illo dolorem accusamus quia nulla dolores molestias cupiditate officia quaerat. Beatae sit corporis, aliquam ipsam quae magni accusantium quo nulla amet, aliquid ratione ullam enim, facilis eos quas hic? Cumque illum maiores perferendis quaerat accusamus blanditiis tempore fugiat veniam voluptatem id ullam officiis possimus ratione totam nesciunt exercitationem eligendi debitis ducimus deserunt, suscipit sed porro? Et dolores alias modi expedita, error vel placeat inventore ipsum molestiae sequi consequuntur. </p>
    </div>
  );
}

export default About;
