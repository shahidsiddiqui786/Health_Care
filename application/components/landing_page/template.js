
const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Welcome to the Health Care App</h5>
      <div class="card-text">
        <p>
          This application can be used to identify first clinical impression 
          of possible illnesses based on provided symptoms. In the next steps, please enter 
          your details and the symptoms that you are feeling. We will try to figure out the 
          health problems you might be facing.
          
        </p>
        
      </div>
    `);
  });
};

export default template;
