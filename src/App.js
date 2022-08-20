import { Formik, Field, Form } from 'formik';
import './App.css';

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: '',
          dob_age: '',
          sex: '',
          mobile_no: '',
          gov_type: '',
          gov_ID: '',
          guardian_details1: '',
          guardian_details2: '',
          email: '',
          emergency_contact: '',
          address: '',
          state: '',
          city: '',
          country: '',
          pincode: '',
          occupation: '',
          religion: '',
          marital_status: '',
          blood_group: '',
          nationality: ''
        }}
      >
        <Form>
          <h3>Personal Details</h3>
          <div class="layout-details">
            <div>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="Enter the name" />
            </div>

            <div>
              <label htmlFor="dob_age">Date of Birth or Age</label>
              <Field id="dob_age" name="dob_age" placeholder="dd/mm/yyyy or Age in years" />
            </div>

            <div>
              <label htmlFor="sex">Sex</label>
              <Field name="sex" component="select">
                <option value="">Enter Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                {/* <option value="product">Product Manager</option>
             <option value="other">Other</option> */}
              </Field>
            </div>

            <div>
              <label htmlFor="mobile_no">Mobile</label>
              <Field id="mobile_no" name="mobile_no" placeholder="Enter Mobile" />
            </div>

            <div class="flexgrow">
              <label htmlFor="govt">Govt Issued ID</label>
              <Field name="gov_type" component="select">
                <option value="">ID Type</option>
                <option value="Addhaar">Addhaar</option>
                <option value="Voter">Voter</option>
                <option value="Passport">Passport</option>
                <option value="Driving Lisence">Driving Lisence</option>
              </Field>
              <Field id="gov_ID" name="gov_ID" placeholder="Enter Government ID" />
            </div>
          </div>
          <h3>Contact Details</h3>
          <div class="layout-details">
          <div>
              <label htmlFor="guardian">Guardian Details</label>
              <Field name="guardian_details1" component="select">
                <option value="">Enter Label</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
              </Field>
              <Field id="guardian_details1" name="guardian_details1" placeholder="Enter Guardian Name" />
          </div>

          <div>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="Enter Email" type="email"/>
            </div>

            <div>
              <label htmlFor="emergency_contact">Emergengy Contact Number</label>
              <Field id="emergency_contact" name="emergency_contact" placeholder="Enter Emergengecy Number" />
            </div>
          </div>

          <h3>Address Details</h3>
          <div class="layout-details">
            <div>
              <label htmlFor="address">Address</label>
              <Field id="address" name="address" placeholder="Enter the Address" />
            </div>

            <div>
              <label htmlFor="state">State</label>
              <Field id="state" name="state" placeholder="Enter State" />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <Field id="city" name="city" placeholder="Enter City/town/village" />
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <Field id="country" name="country" value="India" />
            </div>

            <div class="flexgrow">
              <label htmlFor="pincode">Pin Code</label>
              <Field id="pincode" name="pincode" placeholder="Enter pincode" />
            </div>
          </div>

          <h3>Other Details</h3>
          <div class="layout-details">
            <div>
              <label htmlFor="occupation">Occupation</label>
              <Field id="occupation" name="occupation" placeholder="Enter the Occupation" />
            </div>

            <div>
              <label htmlFor="religion">Religion</label>
              <Field name="religion" component="select">
                <option value="">Enter Religion</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Islam">Islam</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Christianity">Christianity</option>
                <option value="Judaism">Judaism</option>
                <option value="Jainism">Jainism</option>
                <option value="Zoroastrianism">Zoroastrianism</option>  
              </Field>
            </div>

            <div>
              <label htmlFor="marital_status">Marital Status</label>
              <Field name="marital_status" component="select">
                <option value="">Enter Marital Status</option>
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
              </Field>
            </div>

            <div>
              <label htmlFor="blood_group">Blood Group</label>
              <Field name="blood_group" component="select">
                <option value="">Enter Blood Group</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </Field>
            </div>

            <div class="flexgrow">
              <label htmlFor="nationality">Nationality</label>
              <Field id="nationality" name="nationality" value="Indian" />
            </div>
          </div>
        </Form>
      </Formik>
      <div class="buttonposition">
        <button type="submit">Submit</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default App;
