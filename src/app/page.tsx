"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="lg:mx-[10%] lg:flex  gap-4 justify-center mt-28">
      <div className="col-span-1  text-center lg:w-[20%]">
        <div className="mb-2 lg:rounded-lg  bg-white text-xs text-gray-500 bg-opacity-50 backdrop-blur-xl shadow-2xl">
          <div className="h-15 w-full relative">
            <Image
              src="/banner.png"
              alt="Logo"
              width={300}
              height={10}
              className="object-cover w-full h-full mr-2 mb-5 lg:rounded-t-lg"
            />
            {/* <div className="w-12 h-12 mr-2 absolute top-[50%] left-[36%]">
              <Image
                src="/profile-pic.jpg"
                alt="Logo"
                width={100}
                height={10}
                className="object-cover h-full mr-2 mb-5 rounded-full"
              />
            </div> */}
          </div>

          <div className="p-3">
            <p className="mb-1 text-black font-semibold text-sm">John Doe</p>
            <p className="mb-1">
              MERN Stack Developer | HTML | CSS | JAVASCRIPT | EXPRESS - NODE JS
              | REACT JS | REDUX | MONGODB | MONGOOSE | GIT | SQL
            </p>
            <hr className="border-1 border-white mb-1 mt-4" />
            <div className="flex justify-between mb-2">
              <div>Who viewed your profile</div>
              <div className="text-blue-600 font-medium">75</div>
            </div>
            <div className="flex justify-between mb-2">
              <div>Impression of your post</div>
              <div className="text-blue-600 font-medium">123</div>
            </div>
            <hr className="border-1 border-white mb-4 mt-4" />
            <div className="mb-2 text-start">
              <div>Strengthen your profile with an AI writing assistant</div>
              <div className="flex">
                <div>
                  <Image
                    src="/crown.png"
                    alt="Logo"
                    width={15}
                    height={10}
                    className="object-cover  mr-2"
                  />
                </div>
                <div className="text-black font-medium">
                  Reactive Premium: 50% Off
                </div>
              </div>
            </div>
            <hr className="border-1 border-white mb-4 mt-4" />
            <div className="flex">
              <div>
                <Image
                  src="/bookmark.png"
                  alt="Logo"
                  width={15}
                  height={10}
                  className="object-cover  mr-2"
                />
              </div>
              <div className="text-black font-medium">My items</div>
            </div>
          </div>
        </div>
        <div className="lg:rounded-lg p-3 bg-white text-xs bg-opacity-50 backdrop-blur-xl shadow-2xl">
          <ul className="text-blue-600 font-medium">
            <li className="flex items-start">
              <Link href="">
                <span>Groups</span>
              </Link>
            </li>
            <li className="">
              <Link href="" className="">
                <div className="flex justify-between items-center">
                  <span>Events</span>
                  <div className="text-black text-lg">+</div>
                </div>
              </Link>
            </li>
            <li className="flex items-start">
              <Link href="">
                <span>Followed Hashtags</span>
              </Link>
            </li>
          </ul>
          <hr className="border-1 border-white mb-4 mt-4" />
          <div className="text-sm text-gray-500 font-medium">Discover More</div>
        </div>
      </div>
      <div className="lg:w-[50%]">
        <div className="p-4 lg:rounded-lg  bg-white bg-opacity-50 backdrop-blur-xl shadow-lg">
          <div className="flex">
            <div className="w-10 h-10 mr-2">
              <Image
                src="/profile-pic.jpg"
                alt="Logo"
                width={100}
                height={10}
                className="object-cover w-full h-full mr-2 mb-5 rounded-full"
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-full w-full"
                placeholder="Start a post"
              />
            </div>
          </div>

          <div className="flex justify-between p-4">
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2">
                <Image
                  src="/media.png"
                  alt="Logo"
                  width={100}
                  height={10}
                  className="object-cover w-full h-full mr-2 mb-5 rounded-lg"
                />
              </div>
              <div>Media</div>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2">
                <Image
                  src="/calendar.png"
                  alt="Logo"
                  width={100}
                  height={10}
                  className="object-cover w-full h-full mr-2 mb-5 rounded-lg"
                />
              </div>
              <div>Events</div>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2">
                <Image
                  src="/article.png"
                  alt="Logo"
                  width={100}
                  height={10}
                  className="object-cover w-full h-full mr-2 mb-5 rounded-lg"
                />
              </div>
              <div>Write article</div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-white mb-4 mt-4" />
        <div className=" bg-white lg:rounded-lg mb-4 bg-opacity-50 backdrop-blur-xl shadow-2xl">
          <div className="flex justify-between p-4">
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2">
                <Image
                  src="/profile-pic.jpg"
                  alt="user-profile"
                  width={100}
                  height={10}
                  className="object-cover w-full h-full mr-2 rounded-full"
                />
              </div>
              <div className="flex text-xs">
                <div className="mr-1 font-semibold">John Doe</div>
                <div className="text-gray-500">likes this</div>
              </div>
            </div>
            <div className="">... &times;</div>
          </div>
          <hr className="border-1 border-white mx-4" />
          <div className="flex p-4">
            <div className="w-10 h-10 mr-2">
              <Image
                src="/ibm-logo.jpeg"
                alt="user-profile"
                width={100}
                height={10}
                className="object-cover w-full h-full mr-2 mb-5"
              />
            </div>
            <div className="w-full ">
              <div className="flex text-sm ">
                <div className="font-semibold">IBM</div>
                <div className="text-gray-500">.2nd</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <div>GET @ HCLTech | CyberSecurity - Governance,Risk ...</div>
                  <div>
                    20h <span className="text-black">@</span>
                  </div>
                </div>
                <div className="text-blue-600">+Follow</div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <Image
                src="/IBM.jpeg"
                alt="user-profile"
                width={500}
                height={0}
                className="object-cover w-full"
              />
            </div>
          </div>
          <div className="flex px-4 py-2 justify-between">
            <div className="">
              <Image
                src="/thumb-up.png"
                alt="user-profile"
                width={10}
                height={0}
                className="object-cover w-full"
              />
            </div>
            <div className="text-xs text-gray-500">1 comment</div>
          </div>
          <hr className="border-1 border-white mx-4" />
          <div className="flex justify-between p-4 mx-2 text-sm text-gray-500">
            <div className="flex items-center">
              <div>
                <Image
                  src="/like.png"
                  alt="user-profile"
                  width={25}
                  height={0}
                  className="object-cover"
                />
              </div>

              <span className="ml-2">Like</span>
            </div>
            <div className="flex items-center">
              <div>
                <Image
                  src="/comment.png"
                  alt="user-profile"
                  width={25}
                  height={0}
                  className="object-cover"
                />
              </div>

              <span className="ml-2">Comment</span>
            </div>
            <div className="flex items-center">
              <div>
                <Image
                  src="/repost.png"
                  alt="user-profile"
                  width={25}
                  height={0}
                  className="object-cover"
                />
              </div>
              <span className="ml-2">Repost</span>
            </div>
            <div className="flex items-center">
              <div>
                <Image
                  src="/send.png"
                  alt="user-profile"
                  width={25}
                  height={0}
                  className="object-cover"
                />
              </div>
              <span className="ml-2">Send</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[26%] hidden lg:block">
        <div className="bg-white rounded-lg p-4 mb-2 bg-opacity-50 backdrop-blur-xl shadow-2xl">
          <div>
            <div className="flex justify-between">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                LinkedIn News
              </h2>
              <div>
                <Image
                  src="/i.png"
                  alt="user-profile"
                  width={20}
                  height={0}
                  className="object-cover"
                />
              </div>
            </div>
            <ul className="max-w-md space-y-1 list-disc  dark:text-gray-400 px-4 text-sm">
              <li>
                <div className="font-bold">
                  Spotlight on workplace connections
                </div>
                <div className="text-gray-500">4h</div>
              </li>
              <li>
                <div className="font-bold">Israel-Hamas war:latest updates</div>
                <div className="text-gray-500">1d ago . 669 readers</div>
              </li>
              <li>
                <div className="font-bold">
                  Skills gap widens in smaller cities
                </div>
                <div className="text-gray-500">1d ago . 118 readers</div>
              </li>
              <li>
                <div className="font-bold">Attrtions dips at Big Four</div>
                <div className="text-gray-500">15h ago</div>
              </li>
              <li>
                <div className="font-bold">E-giants tap into local power</div>
                <div className="text-gray-500">15h ago</div>
              </li>
            </ul>
            {/* Show more drop-down */}
            <div className="show-more">
              {showMore && (
                <ul className="max-w-md space-y-1 list-disc dark:text-gray-400 px-4 text-sm">
                  <li>
                    <div className="font-bold">
                      Spotlight on workplace connections
                    </div>
                    <div className="text-gray-500">4h</div>
                  </li>
                  <li>
                    <div className="font-bold">
                      Israel-Hamas war:latest updates
                    </div>
                    <div className="text-gray-500">1d ago . 669 readers</div>
                  </li>
                  <li>
                    <div className="font-bold">
                      Skills gap widens in smaller cities
                    </div>
                    <div className="text-gray-500">1d ago . 118 readers</div>
                  </li>
                  <li>
                    <div className="font-bold">Attrtions dips at Big Four</div>
                    <div className="text-gray-500">15h ago</div>
                  </li>
                  <li>
                    <div className="font-bold">
                      E-giants tap into local power
                    </div>
                    <div className="text-gray-500">15h ago</div>
                  </li>
                </ul>
              )}
              <button
                onClick={toggleShowMore}
                className="bg-gray-200 p-1 rounded text-sm"
              >
                {showMore ? (
                  <div className="flex items-center">
                    Show less <ChevronUp />
                  </div>
                ) : (
                  <div className="flex items-center">
                    Show more <ChevronDown />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-2 text-gray-500 bg-opacity-50 backdrop-blur-xl shadow-2xl">
          <div className="flex justify-end text-xs">Ad ...</div>
          <div className="text-xs text-center mb-2">
            Follow and upgrade your business with Hitachi!
          </div>
          <div className="flex justify-center mb-2">
            <div className="w-20 h-20 mr-2">
              <Image
                src="/profile-pic.jpg"
                alt="Logo"
                width={100}
                height={10}
                className="object-cover w-full h-full mr-2 mb-5 rounded-full"
              />
            </div>
            <div className="w-20 h-20 mr-2">
              <Image
                src="/linkedin-gold.jpeg"
                alt="Logo"
                width={100}
                height={10}
                className="object-cover w-full h-full mr-2 mb-5 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center mb-2 text-sm">
            Hitachi Social Innovation is Powering Good
          </div>
          <div className="flex justify-center">
            <button className="border-2 font-semibold border-blue-500 p-1 w-[30%] mb-4 rounded-full bg-white text-blue-500">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
