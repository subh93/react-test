import { Formik, Field, Form } from 'formik';
import './App.css';
import { useState } from 'react';

function App() {
  const [users, setSubmit] = useState([]);
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
          country: 'India',
          pincode: '',
          occupation: '',
          religion: '',
          marital_status: '',
          blood_group: '',
          nationality: 'Indian'
        }}

        onSubmit={(values, {resetForm})=>{
          const newUser = [values]
          setSubmit([...users, ...newUser]);
          resetForm({ values: '' })
        }}
      >
        <Form>
          <h3>Personal Details</h3>
          <div className="layout-details">
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
              </Field>
            </div>

            <div>
              <label htmlFor="mobile_no">Mobile</label>
              <Field id="mobile_no" name="mobile_no" placeholder="Enter Mobile" />
            </div>

            <div className="flexgrow">
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
          <div className="layout-details">
          <div>
              <label htmlFor="guardian">Guardian Details</label>
              <Field name="guardian_details1" component="select">
                <option value="">Enter Label</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
              </Field>
              <Field id="guardian_details2" name="guardian_details2" placeholder="Enter Guardian Name" />
          </div>

          <div>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" placeholder="Enter Email" type="email" />
            </div>

            <div>
              <label htmlFor="emergency_contact">Emergengy Contact Number</label>
              <Field id="emergency_contact" name="emergency_contact" placeholder="Enter Emergengecy Number" />
            </div>
          </div>

          <h3>Address Details</h3>
          <div className="layout-details">
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
              <Field id="country" name="country" placeholder="India"/>
            </div>

            <div className="flexgrow">
              <label htmlFor="pincode">Pin Code</label>
              <Field id="pincode" name="pincode" placeholder="Enter pincode" />
            </div>
          </div>

          <h3>Other Details</h3>
          <div className="layout-details">
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

            <div className="flexgrow">
              <label htmlFor="nationality">Nationality</label>
              <Field id="nationality" name="nationality" placeholder="Indian"/>
            </div>
          </div>
          <div className="buttonposition">
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </div>
        </Form>
      </Formik>
      <div className="displaydata">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB/Age</th>
              <th>Sex</th>
              <th>Mobile No</th>
              <th>Government Type & ID</th>
              <th>Guardian Details</th>
              <th>Email</th>
              <th>Emergency Contact</th>
              <th>Address</th>
              <th>Occupation</th>
              <th>Religion</th>
              <th>Marital Status</th>
              <th>Blood Group</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, index) => (
            <tr key={user.index}>
              <td>{user.name}</td>
              <td>{user.dob_age}</td>
              <td>{user.sex}</td>
              <td>{user.mobile_no}</td>
              <td>{user.gov_type} {user.gov_ID}</td>
              <td>{user.guardian_details1} {user.guardian_details2}</td>
              <td>{user.email}</td>
              <td>{user.emergency_contact}</td>
              <td>{user.address},{user.city},{user.state},{user.country},{user.pincode}</td>
              <td>{user.occupation}</td>
              <td>{user.religion}</td>
              <td>{user.marital_status}</td>
              <td>{user.blood_group}</td>
              <td>{user.nationality}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      </div>
  );
}

export default App;
