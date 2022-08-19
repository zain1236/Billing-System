import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCustomer = () => {
  const [customer, setCustomer] = useState();

  const params = useParams();
  const navigate = useNavigate();

  const fetchData = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}customer/${params.id}`)
      .then((d) => {
        setCustomer(d.data.data);
        console.log(d.data.data);
      });
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();

    customer.companyId = localStorage.getItem("company");
    console.log(customer);
    axios
      .put(`${process.env.REACT_APP_BASE_URL}customer/${params.id}`, customer)
      .then((d) => {
        console.log(d);
        navigate("/customer", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="flex justify-center mt-20 ">
      <div className="min-h-[700px] w-[1000px] bg-slate-400 p-10 rounded-md ">
        <h1 className="text-2xl underline text-white font-semibold ">
          Edit Customer
        </h1>

        <form
          className="m-10 flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="custType"> Customer Type </label>
          <select
            name="custType"
            id="custType"
            onChange={(e) =>
              setCustomer({ ...customer, custType: e.target.value })
            }
          >
            <option value="Business">Business</option>
            <option value="Individual">Individual</option>
          </select>
          <div className="mt-3">
            <input
              defaultValue={customer?.name}
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              className=" rounded-sm p-1  border-none outline-none ml-2 "
              required
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
          </div>
          {/* <!-- optional --> */}

          <div className="mt-3">
            <input
              defaultValue={customer?.email}
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              className=" rounded-sm p-1  border-none outline-none ml-2 "
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />
          </div>

          <div className="flex items-center mt-3">
            <input
              defaultValue={customer?.mobile}
              type="text"
              placeholder="Mobile"
              name="mobile"
              id="mobile"
              className=" rounded-sm p-1  border-none outline-none ml-2 "
              onChange={(e) =>
                setCustomer({ ...customer, mobile: e.target.value })
              }
            />
          </div>

          <div className="mt-3">
            <input
              defaultValue={customer?.website}
              type="text"
              placeholder="Website"
              name="website"
              id="website"
              className=" rounded-sm p-1  border-none outline-none ml-2 "
              onChange={(e) =>
                setCustomer({ ...customer, website: e.target.value })
              }
            />
          </div>

          <div className="mt-3">
            <input
              defaultValue={customer?.pan}
              type="text"
              placeholder="Pan"
              name="pan"
              id="pan"
              className=" rounded-sm p-1  border-none outline-none ml-2 "
              onChange={(e) =>
                setCustomer({ ...customer, pan: e.target.value })
              }
            />
          </div>
          {/* <!-- //optional --> */}

          <div className="mt-3">
            <label htmlFor="GST_treatement">GST treatment</label>
            <select
              name="GST_treatement"
              id="GST_treatement"
              onChange={(e) =>
                setCustomer({ ...customer, GST_treatement: e.target.value })
              }
            >
              <option value="Registered"> Registered Business - Regular</option>
              <option value="Unregistered">Unregistered Business</option>
              <option value="Overseas">Overseas</option>
            </select>
          </div>

          <div className="mt-3">
            <input
              defaultValue={customer?.GST_IN}
              type="text"
              placeholder="GST IN"
              name="GST_IN"
              id="GST_IN"
              className=" rounded-sm p-1  border-none outline-none ml-2 "
              required
              onChange={(e) =>
                setCustomer({ ...customer, GST_IN: e.target.value })
              }
            />
          </div>

          <div className="mt-3 flex flex-col">
            <span className="text-white">Address:</span>
            <select
              name=""
              id=""
              defaultValue={customer?.country}
              onChange={(e) =>
                setCustomer({ ...customer, country: e.target.value })
              }
            >
              <option value="DEFAULT" disabled>
                --Select--
              </option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Aland Islands">Aland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bonaire, Sint Eustatius and Saba">
                Bonaire, Sint Eustatius and Saba
              </option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, Democratic Republic of the Congo">
                Congo, Democratic Republic of the Congo
              </option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'Ivoire">Cote D'Ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curacao">Curacao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">
                Falkland Islands (Malvinas)
              </option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands">
                Heard Island and Mcdonald Islands
              </option>
              <option value="Holy See (Vatican City State)">
                Holy See (Vatican City State)
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">
                Iran, Islamic Republic of
              </option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">
                Korea, Democratic People's Republic of
              </option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">
                Lao People's Democratic Republic
              </option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">
                Libyan Arab Jamahiriya
              </option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia, the Former Yugoslav Republic of">
                Macedonia, the Former Yugoslav Republic of
              </option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">
                Micronesia, Federated States of
              </option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">
                Northern Mariana Islands
              </option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">
                Palestinian Territory, Occupied
              </option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Barthelemy">Saint Barthelemy</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Martin">Saint Martin</option>
              <option value="Saint Pierre and Miquelon">
                Saint Pierre and Miquelon
              </option>
              <option value="Saint Vincent and the Grenadines">
                Saint Vincent and the Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Serbia and Montenegro">
                Serbia and Montenegro
              </option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Sint Maarten">Sint Maarten</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and the South Sandwich Islands">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">
                Svalbard and Jan Mayen
              </option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan, Province of China">
                Taiwan, Province of China
              </option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">
                Tanzania, United Republic of
              </option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">
                Turks and Caicos Islands
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">
                United States Minor Outlying Islands
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="Virgin Islands, British">
                Virgin Islands, British
              </option>
              <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>

            {customer?.country?.toLowerCase() === "india" ? (
              <select
                name=""
                id=""
                defaultValue={customer?.state}
                className="mt-3"
                onChange={(e) =>
                  setCustomer({ ...customer, state: e.target.value })
                }
              >
                <option value="DEFAULT" disabled>
                  --Select--
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            ) : (
              <input
                type="text"
                placeholder="State"
                name="state"
                id="address"
                className="mt-2 rounded-sm p-1 border-none outline-none ml-2"
                required
                defaultValue={customer?.state}
                onChange={(e) =>
                  setCustomer({ ...customer, state: e.target.value })
                }
              />
            )}
            <input
              defaultValue={customer?.city}
              type="text"
              placeholder="City"
              name="city"
              id="address"
              className="mt-2 rounded-sm p-1  border-none outline-none ml-2 "
              onChange={(e) =>
                setCustomer({ ...customer, city: e.target.value })
              }
            />
            <input
              defaultValue={customer?.zipcode}
              type="text"
              placeholder="Zip Code"
              name="zipcode"
              id="address"
              className="mt-2 rounded-sm p-1  border-none outline-none ml-2 "
              required
              onChange={(e) =>
                setCustomer({ ...customer, zipcode: e.target.value })
              }
            />
          </div>
          <div className="mt-3">
            <input
              defaultValue={customer?.placeofsupply}
              type="text"
              placeholder="Place of Supply"
              name="placeofsupply"
              id="placeofstudy"
              className=" rounded-sm p-1  border-none outline-none ml-2 "
              required
              onChange={(e) =>
                setCustomer({ ...customer, placeofsupply: e.target.value })
              }
            />
          </div>
          <button className="mt-10 bg-indigo-500 hover:bg-indigo-600 px-5 py-3 rounded-md text-white ">
            SUBMIT
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditCustomer;
