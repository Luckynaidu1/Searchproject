import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    setFilteredCountries(
      Data.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, Data]);
  return (
    <div><div className="flex flex-row">

      <div className="w-[600px]">
        <input placeholder="serach....." className="w-[400px] h-[50px] mb-[40px] mt-[10px] ml-[10px]"  onChange={(e) => setSearch(e.target.value)}/>
         {filteredCountries.map((item, index)=>{
          return<>
          <table className="table-auto">
  <tbody>
    <tr className="flex flex-row gap-[100px] ">
      <td className="w-[70px] text-[22px] mt-[8px ]"  >{item.name}</td>
      <td className="w-[70px] text-[22px] mt-[8px]">{item.role}</td>
      <td className="w-[100px] mt-[8px] "><img src={item.image}/></td>
      </tr>
  </tbody>
</table>
          </>
         })}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="absolute top-0 text-3xl">Organisation Flow chart</h1>
        <div className="container pt-24 mx-auto text-center">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="w-16">
                  <img
                    className="block m-auto rounded-full shadow-md"
                    alt="Duc Sun"
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                  />
                </div>
                <div className="text-gray-600">
                  <p>Duc Sun</p>
                  <p>ceo</p>
                </div>
              </div>
              <ul className="flex flex-row justify-center mt-10">
                <div className="absolute h-10 -mt-10 border-l-2 border-gray-400"></div>
                <li className="relative p-6">
                  <div
                    className="absolute top-0 h-8 border-t-2 border-gray-400"
                    style={{left: '50%', right: '0px'}}
                  ></div>
                  <div className="relative flex justify-center">
                    <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                    <div className="text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16">
                          <img
                            className="block m-auto rounded-full shadow-md"
                            alt="Leo Six"
                            src="https://randomuser.me/api/portraits/men/83.jpg"
                          />
                        </div>
                        <div className="text-gray-600">
                          <p>Leo Six</p>
                          <p>Management</p>
                        </div>
                      </div>
                      <ul className="flex flex-row justify-center mt-10">
                        <div className="absolute h-10 -mt-10 border-l-2 border-gray-400"></div>
                        <li className="relative p-6">
                          <div
                            className="absolute top-0 h-8 border-t-2 border-gray-400"
                            style={{left: '50%', right: '0px'}}
                          ></div>
                          <div className="relative flex justify-center">
                            <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                            <div className="text-center">
                              <div className="flex flex-col items-center justify-center">
                                <div className="w-16">
                                  <img
                                    className="block m-auto rounded-full shadow-md"
                                    alt="Tab Han"
                                    src="https://randomuser.me/api/portraits/men/46.jpg"
                                  />
                                </div>
                                <div className="text-gray-600">
                                  <p>Tab Han</p>
                                  <p>Project Manager</p>
                                </div>
                              </div>
                              <ul className="flex flex-row justify-center mt-10">
                                <div className="absolute h-10 -mt-10 border-l-2 border-gray-400"></div>
                                <li className="relative p-6">
                                  <div
                                    className="absolute top-0 h-8 border-t-2 border-gray-400"
                                    style={{left: '50%', right: '0px'}}
                                  ></div>
                                  <div className="relative flex justify-center">
                                    <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                                    <div className="text-center">
                                      <div className="flex flex-col items-center justify-center">
                                        <div className="w-16">
                                          <img
                                            className="block m-auto rounded-full shadow-md"
                                            alt="Daniel Zhou"
                                            src="https://randomuser.me/api/portraits/men/76.jpg"
                                          />
                                        </div>
                                        <div className="text-gray-600">
                                          <p>Daniel Zhou</p>
                                          <p>Team Lead</p>
                                        </div>
                                      </div>
                                      <ul className="flex flex-row justify-center mt-10">
                                        <div className="absolute h-10 -mt-10 border-l-2 border-gray-400"></div>
                                        <li className="relative p-6">
                                          <div
                                            className="absolute top-0 h-8 border-t-2 border-gray-400"
                                            style={{left: '50%', right: '0px'}}
                                          ></div>
                                          <div className="relative flex justify-center">
                                            <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                                            <div className="text-center">
                                              <div className="flex flex-col items-center justify-center">
                                                <div className="w-16">
                                                  <img
                                                    className="block m-auto rounded-full shadow-md"
                                                    alt="Patrick Wang"
                                                    src="https://randomuser.me/api/portraits/men/55.jpg"
                                                  />
                                                </div>
                                                <div className="text-gray-600">
                                                  <p>Patrick Wang</p>
                                                  <p>Developer</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="relative p-6">
                                          <div
                                            className="absolute top-0 h-8 border-t-2 border-gray-400"
                                            style={{left: '0px', right: '50%'}}
                                          ></div>
                                          <div className="relative flex justify-center">
                                            <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                                            <div className="text-center">
                                              <div className="flex flex-col items-center justify-center">
                                                <div className="w-16">
                                                  <img
                                                    className="block m-auto rounded-full shadow-md"
                                                    alt="Jonsen Li"
                                                    src="https://randomuser.me/api/portraits/men/41.jpg"
                                                  />
                                                </div>
                                                <div className="text-gray-600">
                                                  <p>Jonsen Li</p>
                                                  <p>Developer</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li className="relative p-6">
                                  <div
                                    className="absolute top-0 h-8 border-t-2 border-gray-400"
                                    style={{left: '0px', right: '0px'}}
                                  ></div>
                                  <div className="relative flex justify-center">
                                    <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                                    <div className="text-center">
                                      <div className="flex flex-col items-center justify-center">
                                        <div className="w-16">
                                          <img
                                            className="block m-auto rounded-full shadow-md"
                                            alt="Derek Hu"
                                            src="https://randomuser.me/api/portraits/men/44.jpg"
                                          />
                                        </div>
                                        <div className="text-gray-600">
                                          <p>Derek Hu</p>
                                          <p>Team Lead</p>
                                        </div>
                                      </div>
                                      <ul className="flex flex-row justify-center mt-10">
                                        <div className="absolute h-10 -mt-10 border-l-2 border-gray-400"></div>
                                        <li className="relative p-6">
                                          <div
                                            className="absolute top-0 h-8 border-t-2 border-gray-400"
                                            style={{left: '50%', right: '50%'}}
                                          ></div>
                                          <div className="relative flex justify-center">
                                            <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                                            <div className="text-center">
                                              <div className="flex flex-col items-center justify-center">
                                                <div className="w-16">
                                                  <img
                                                    className="block m-auto rounded-full shadow-md"
                                                    alt="Alfie Zu"
                                                    src="https://randomuser.me/api/portraits/men/25.jpg"
                                                  />
                                                </div>
                                                <div className="text-gray-600">
                                                  <p>Alfie Zu</p>
                                                  <p>Developer</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li className="relative p-6">
                                  <div
                                    className="absolute top-0 h-8 border-t-2 border-gray-400"
                                    style={{left: '0px', right: '50%'}}
                                  ></div>
                                  <div className="relative flex justify-center">
                                    <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                                    <div className="text-center">
                                      <div className="flex flex-col items-center justify-center">
                                        <div className="w-16">
                                          <img
                                            className="block m-auto rounded-full shadow-md"
                                            alt="Lennis Chan"
                                            src="https://randomuser.me/api/portraits/men/30.jpg"
                                          />
                                        </div>
                                        <div className="text-gray-600">
                                          <p>Lennis Chan</p>
                                          <p>Team Lead</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="relative p-6">
                          <div
                            className="absolute top-0 h-8 border-t-2 border-gray-400"
                            style={{left: '0px', right: '50%'}}
                          ></div>
                          <div className="relative flex justify-center">
                            <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                            <div className="text-center">
                              <div className="flex flex-col items-center justify-center">
                                <div className="w-16">
                                  <img
                                    className="block m-auto rounded-full shadow-md"
                                    alt="Peter Miao"
                                    src="https://randomuser.me/api/portraits/men/54.jpg"
                                  />
                                </div>
                                <div className="text-gray-600">
                                  <p>Peter Miao</p>
                                  <p>Project Manager</p>
                                </div>
                              </div>
                              <ul className="flex flex-row justify-center mt-10">
                                <div className="absolute h-10 -mt-10 border-l-2 border-gray-400"></div>
                                <li className="relative p-6">
                                  <div
                                    className="absolute top-0 h-8 border-t-2 border-gray-400"
                                    style={{left: "50%" ,right: "50%"}}
                                  ></div>
                                  <div className="relative flex justify-center">
                                    <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                                    <div className="text-center">
                                      <div className="flex flex-col items-center justify-center">
                                        <div className="w-16">
                                          <img
                                            className="block m-auto rounded-full shadow-md"
                                            alt="Peter Ming"
                                            src="https://randomuser.me/api/portraits/men/90.jpg"
                                          />
                                        </div>
                                        <div className="text-gray-600">
                                          <p>Peter Ming</p>
                                          <p>Team Lead</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative p-6">
                  <div
                    className="absolute top-0 h-8 border-t-2 border-gray-400"
                    style={{left: '0px', right: '0px'}}
                  ></div>
                  <div className="relative flex justify-center">
                    <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                    <div className="text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16">
                          <img
                            className="block m-auto rounded-full shadow-md"
                            alt="Shi Ten"
                            src="https://randomuser.me/api/portraits/men/43.jpg"
                          />
                        </div>
                        <div className="text-gray-600">
                          <p>Shi Ten</p>
                          <p>HR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative p-6">
                  <div
                    className="absolute top-0 h-8 border-t-2 border-gray-400"
                    style={{ left: "0px", right: "50%" }}
                  ></div>
                  <div className="relative flex justify-center">
                    <div className="absolute top-0 h-6 -mt-6 border-l-2 border-gray-400"></div>
                    <div className="text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16">
                          <img
                            className="block m-auto rounded-full shadow-md"
                            alt="Shawn Mong"
                            src="https://randomuser.me/api/portraits/men/97.jpg"
                          />
                        </div>
                        <div className="text-gray-600">
                          <p>Shawn Mong</p>
                          <p>admin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </div>

    </div>
  );
}

export default App;
const Data=[{name:"Mark hill", role:"Ceo", image:'https://randomuser.me/api/portraits/men/12.jpg'},
{name:"Mark hill", role:"Ceo", image:'https://randomuser.me/api/portraits/men/12.jpg'},
{name:"mark bitten", role:"hr", image:'https://randomuser.me/api/portraits/men/12.jpg'},
{name:"hr shien", role:"admin", image:'https://randomuser.me/api/portraits/men/12.jpg'},
{name:"jully", role:"management", image:'https://randomuser.me/api/portraits/men/12.jpg'},
{name:"jack", role:"project manger", image:'https://randomuser.me/api/portraits/men/12.jpg'},
{name:"dan", role:"team lead", image:'https://randomuser.me/api/portraits/men/12.jpg'},
{name:"stphen", role:"team lead", image:'https://randomuser.me/api/portraits/men/12.jpg'},
{name:"chiew", role:"devloper", image:'https://randomuser.me/api/portraits/men/12.jpg'},
{name:"marry", role:"Devloper", image:'https://randomuser.me/api/portraits/men/12.jpg'}  ]