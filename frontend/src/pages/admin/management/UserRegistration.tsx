import { Camera } from "lucide-react";
import {
  districts,
  registrationRoles,
} from "../../../data/registrationFormData";
import { useForm } from "react-hook-form";

interface FormData {
  profile_image: FileList;
  full_name: string;
  email: string;
  phone: string;
  id: string;
  role: string;
  country_issue: string;
  country: string;
  city: string;
  province: string;
  district: string;
  sector: string;
  cell: string;
  address: string;
  password: string;
}

function UserRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitFormData = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="w-full p-4 md:p-6 lg:py-2 lg:p-8 bg-background dark:bg-gray-800/30 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm shadow-secondary-color/10">
      <h1 className="py-8  font-semibold text-xl text-gray-900 dark:text-gray-300">
        Add New User
      </h1>
      <form onSubmit={handleSubmit(submitFormData)}>
        <div>
          <h1 className="text-gray-900 dark:text-gray-300 text-sm font-mono font-semibold tracking-wider md:border-b-2 md:border-gray-100 dark:border-gray-700/20 pb-2 mb-2 md:mb-6">
            IDENTITY PRESENCE
          </h1>
          <div className="flex items-center gap-4 ">
            <div className="relative flex items-center justify-center shrink-0 w-18 h-18 md:w-24 md:h-24 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-2xl bg-gray-100 dark:bg-gray-800/30">
              <span className="text-gray-400 dark:text-gray-500">
                <Camera size={28} />
              </span>
              <input
                className="absolute w-full h-full text-transparent inset-0"
                type="file"
                accept="image/png,image/jpeg"
                {...register("profile_image", {
                  validate: (file: FileList) => {
                    if (file[0]?.size > 20 * 1024 * 1024) {
                      return "File size should be less than 20MB";
                    }
                    if (
                      file[0] &&
                      !["image/jpeg", "image/png"].includes(file[0]?.type)
                    ) {
                      return "Only JPEG and PNG formats are allowed";
                    }

                    return true;
                  },
                })}
              />
            </div>
            <div className="space-y-1">
              <h1 className="font-semibold text-gray-900 dark:text-gray-300">
                Profile Photo
              </h1>
              <p className="text-xs  text-gray-700 dark:text-gray-500">
                A clear proffesional headshot helps to identify each other.{" "}
                <br className="max-md:hidden" />
                JPEG or PNG, max 5MB.
              </p>
            </div>
          </div>
        </div>
        {errors.profile_image && (
          <p className="text-red-500 text-xs mt-1">
            {errors.profile_image.message}
          </p>
        )}

        <div>
          {/* Basic information */}
          <div className="flex flex-col gap-4">
            <h1 className="pb-2 max-md:mt-10 md:mt-12 border-b border-gray-100 dark:border-gray-700/20 text-gray-900 dark:text-gray-300 text-sm font-mono font-semibold tracking-wider">
              BASIC INFORMATION
            </h1>
            <div className="max-md:mb-9 max-md:mt-2 grid max-md:grid-cols-1 grid-cols-2 gap-5 md:gap-8 ">
              <div className="flex flex-col gap-1 w-full  text-gray-900 dark:text-gray-300 ">
                <label
                  htmlFor="full_name"
                  className="tracking-wider uppercase text-xs font-semibold mb-2 "
                >
                  Full Name:
                </label>

                <input
                  id="full_name"
                  type="text"
                  placeholder="e.g Irakarama leon"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                  {...register("full_name", {
                    required: "Full name is required",
                  })}
                />
                {errors.full_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.full_name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="email"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  Email:
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="e.g example@gmail.com"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="phone"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  phone number:
                </label>

                <input
                  id="phone"
                  type="text"
                  placeholder="phone number"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="id"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  national id:
                </label>

                <input
                  id="id"
                  type="text"
                  placeholder="national id"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                  {...register("id", {
                    required: "National ID is required",
                  })}
                />
                {errors.id && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.id.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="country_issue"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  issuing country:
                </label>

                <input
                  id="country_issue"
                  type="text"
                  placeholder="Rwanda"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                  {...register("country_issue", {
                    required: "Issuing country is required",
                  })}
                />
                {errors.country_issue && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.country_issue.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* assigned roles */}
          <div>
            <h1 className="pb-2 max-md:mb-4 max-md:mt-2 md:mt-12 border-b mb-6 border-gray-100 dark:border-gray-700/20 text-gray-900  dark:text-gray-300 text-sm font-mono font-semibold tracking-wider">
              ASSIGNED ROLES
            </h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 md:gap-6">
              {registrationRoles.map(({ id, role, Icon, description }) => (
                <div
                  key={id}
                  className=" group relative hover:-translate-y-1 overflow-hidden hover:scale-102 cursor-pointer hover:shadow-md hover:shadow-secondary-color/30  duration-400 md:w-full md:p-6 p-4 bg-gray-100 rounded-lg dark:bg-gray-800/40 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/6"
                >
                  <div className="hidden  group-hover:block group-hover:duration-300 transition-colors absolute left-0 top-2  dark:bg-blue-600/80 w-13 h-14 rounded-full -z-2 blur-xl" />
                  <div className="flex items-center justify-between">
                    <span>
                      <Icon />
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-400 w-5 h-5 rounded-full border-4 border-black dark:border-gray-100">
                      <div className="bg-gray-400 dark:bg-blue-600 w-full h-full rounded-full" />
                    </span>
                  </div>
                  <h1 className="tracking-wider font-semibold md:py-2">
                    {role}
                  </h1>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* security Credentials */}
          <div>
            <h1 className="pb-2 mb-6 max-md:mt-10 md:mt-12 border-b border-gray-100  dark:border-gray-700/20 text-gray-900 dark:text-gray-300 text-sm font-mono font-semibold tracking-wider">
              SECURITY CREDENTIALS
            </h1>

            <div className="flex flex-col gap-1  ">
              <label
                htmlFor="password"
                className="uppercase text-xs font-semibold tracking-wider mb-2"
              >
                Password:
              </label>

              <input
                id="password"
                type="password"
                placeholder="password"
                className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl max-w-md border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                {...register("password", {
                  validate: (password) => {
                    if (password.length < 8) {
                      return "Password must be at least 8 characters long";
                    }
                    if (
                      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
                        password,
                      )
                    ) {
                      return "Password must contain at least one uppercase letter, one number, and one special character";
                    }

                    return true;
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Basic information */}
          <div className="flex flex-col gap-4">
            <h1 className="pb-2 max-md:mt-10 md:mt-12 border-b border-gray-100 dark:border-gray-700/20 text-gray-900 dark:text-gray-300 text-sm font-mono font-semibold tracking-wider">
              ADDRESS INFO
            </h1>
            <div className="max-md:mb-9 max-md:mt-2 grid max-md:grid-cols-1 grid-cols-2 gap-5 md:gap-8 ">
              <div className="flex flex-col gap-1 w-full  text-gray-900 dark:text-gray-300  ">
                <label
                  htmlFor="country"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  country:
                </label>

                <input
                  id="country"
                  type="text"
                  placeholder="Rwanda"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                  {...register("country", {
                    required: "Country is required",
                  })}
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="city"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  city:
                </label>

                <input
                  id="city"
                  type="text"
                  placeholder="Kigali city"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                  {...register("city", {
                    required: "City is required",
                  })}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="province"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  province:
                </label>

                <select
                  id="province"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                  {...register("province", {
                    validate: (province) => {
                      if (province === "Select Province") {
                        return "Province is required";
                      }
                      return true;
                    },
                  })}
                >
                  <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
                    Select Province
                  </option>
                  <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
                    Kigali city
                  </option>
                  <option
                    className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300"
                    defaultValue=""
                  >
                    Western Province
                  </option>
                  <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
                    Eastern Province
                  </option>
                  <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
                    Northern Province
                  </option>
                  <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
                    Southern Province
                  </option>
                </select>
                {errors.province && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.province.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="district"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  district:
                </label>

                <select
                  {...register("district", {
                    validate: (district) => {
                      if (district === "Select district") {
                        return "District is required";
                      }
                      return true;
                    },
                  })}
                  defaultValue={districts[0]?.district}
                  id="district"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                >
                  {districts.map((location) => (
                    <option
                      key={location.id}
                      className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {location.district}
                    </option>
                  ))}
                </select>
                {errors.district && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.district.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="sector"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  sector:
                </label>

                <input
                  {...register("sector", {
                    required: "Sector is required",
                  })}
                  id="sector"
                  type="text"
                  placeholder="Muhima"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
                {errors.sector && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.sector.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="cell"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  cell:
                </label>

                <input
                  {...register("cell", {
                    required: "Cell is required",
                  })}
                  id="cell"
                  type="text"
                  placeholder="kabeza"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
                {errors.cell && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.cell.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full ">
                <label
                  htmlFor="address"
                  className="tracking-wider uppercase text-xs font-semibold mb-2"
                >
                  address:
                </label>

                <input
                  {...register("address", {
                    required: "Address is required",
                  })}
                  id="address"
                  type="text"
                  placeholder="kabeza"
                  className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800/20 dark:backdrop-blur-3xl border-gray-100 shadow-sm border dark:border-gray-100/20 outline-none"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-40 p-2 rounded-lg text-white text-center capitalize font-semibold ml-auto my-8 mb-3 bg-blue-600">
          <button type="submit" className="capitalize">
            create
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserRegistration;
