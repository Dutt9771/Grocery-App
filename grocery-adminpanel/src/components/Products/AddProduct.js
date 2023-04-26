import Dashboard from "../../containers/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";

import * as Yup from "yup";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Upload } from "antd";

const { TextArea } = Input;

const initialvalues = {
  product_name: "",
  product_description: "",
  product_images: "",
  price: "",
  availability: "",
  shipping: "",
  product_dimensions: "",
  wieght: "",
  material: "",
  product_features: "",
  reviews: "",
  related_product: "",
  faqs: "",
  warranty: "",
  return_policy: "",
};
export default function AddProduct() {
  let Related_Products = [
    { name: "Product 1" },
    { name: "Product 2" },
    { name: "Product 3" },
    { name: "Product 4" },
    { name: "Product 5" },
    { name: "Product 6" },
    { name: "Product 7" },
    { name: "Product 8" },
    { name: "Product 9" },
    { name: "Product 10" },
  ];

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const Crmschema = Yup.object({
    product_name: Yup.string()
      .min(2)
      .max(25)
      .required("Product Name is required"),
    product_description: Yup.string()
      .min(10)
      .required("Product Description is required"),
    price: Yup.string()
      .required("Price is required")
      .matches(/^[0-9,.]+$/, "Must be only digits"),
    availability: Yup.string().required("Availability is required"),
    product_features: Yup.string().required("Product Features is required"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: Crmschema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  console.log("values", values);
  return (
<>
<Dashboard>              

    <form action="post" onSubmit={handleSubmit} noValidate autoComplete="off">
      <h2 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Add/Edit Product
      </h2>
      {/* component="form" */}
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80ch" },
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <div>
            <FormLabel className="ms-2 mt-auto mb-auto ">
              Product Name :-
            </FormLabel>
          </div>
          <div>
            <TextField
              id="outlined-multiline-flexible"
              name="product_name"
              placeholder="Enter Product Name"
              type="text"
              multiline
              maxrows={2}
              value={values.product_name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />

            {/* </FormControl> */}
          </div>
        </div>
        <div style={{ color: "red" }}>
          {errors.product_name && touched.product_name
            ? errors.product_name
            : null}
        </div>
        <div>
          <div>
            <FormLabel className="mt-auto mb-auto">
              Product Description :-
            </FormLabel>
          </div>
          <div>
            <TextArea
              className="w-auto"
              placeholder="Enter Product Description"
              name="description"
              value={values.product_description}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              cols={100}
            />
          </div>
        </div>

        <div style={{ color: "red" }}>
          {errors.product_description && touched.product_description
            ? errors.product_description
            : null}
        </div>
        <div className="w-50 ms-6 d-flex upload">
          <div className="mt-auto mb-auto d-flex justify-content-start ">
            <FormLabel className="mt-auto mb-auto d-flex justify-content-start me-4">
              Product Images :-
            </FormLabel>
          </div>
          <div className="mt-4 mb-auto">
            <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>
          </div>
        </div>
        <div>
          <div>
            <FormLabel className="ms-2">Price :-</FormLabel>
          </div>
          <div>
            <TextField
              placeholder="Enter Price"
              name="price"
              type="text"
              maxrows={4}
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
          </div>
        </div>
        <div style={{ color: "red" }}>
          {errors.price && touched.price ? errors.price : null}
        </div>
        <div style={{ display: "flex", width: "45%" }} className="template">
          <div>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="yes"
              name="availability"
              value={values.availability}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            >
              <p style={{ marginRight: "20px" }}>Availability </p> &nbsp;
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="NO" />
            </RadioGroup>
          </div>
        </div>
        <div style={{ color: "red" }}>
          {errors.availability && touched.availability
            ? errors.availability
            : null}
        </div>
        <div>
          <div>
            <FormLabel className="mt-auto mb-auto">Shipping :-</FormLabel>
          </div>
          <div>
            <TextArea
              className="w-auto"
              placeholder="Enter Shipping Description"
              name="shipping"
              type="text"
              maxrows={4}
              value={values.shipping}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              cols={100}
            />
          </div>
        </div>
        <div style={{ color: "red" }}>
          {errors.shipping && touched.shipping ? errors.shipping : null}
        </div>
        <div>
          <div>
            <FormLabel className="ms-2 mt-auto mb-auto">
              Product Dimensions :-
            </FormLabel>
          </div>
          <div>
            <TextField
              placeholder="Enter Product Dimensions"
              name="product_dimensions"
              type="text"
              maxrows={4}
              value={values.product_dimensions}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
          </div>
        </div>
        <div>
          <div>
            <FormLabel className="ms-2 mt-auto mb-auto">
              Product Wieght :-
            </FormLabel>
          </div>
          <div>
            <TextField
              placeholder="Enter Product Wieght"
              name="wieght"
              type="text"
              maxrows={4}
              value={values.wieght}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
          </div>
        </div>
        <div>
          <div>
            <FormLabel className="ms-2 mt-auto mb-auto">
              Material And Construction :-
            </FormLabel>
          </div>
          <div>
            <TextArea
              placeholder="Enter Material And Construction"
              name="material"
              type="text"
              maxrows={4}
              value={values.material}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              cols={100}
              className="w-auto"
            />
          </div>
        </div>
        <div>
          <div>
            <FormLabel className="mt-auto mb-auto">
              Product Features :-
            </FormLabel>
          </div>
          <div>
            <TextArea
              placeholder="Enter Product Features"
              name="product_features"
              type="text"
              maxrows={4}
              value={values.product_features}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              cols={100}
              className="w-auto"
            />
          </div>
        </div>
        <div style={{ color: "red" }}>
          {errors.product_features && touched.product_features
            ? errors.product_features
            : null}
        </div>
        <div>
          <div>
            <FormLabel className="ms-2 mt-auto mb-auto">Reviews :-</FormLabel>
          </div>
          <div>
            <TextField
              placeholder="Enter Reviews"
              name="reviews"
              type="text"
              maxrows={4}
              value={values.reviews}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
          </div>
        </div>
        <div style={{ color: "red" }}>
          {errors.reviews && touched.reviews ? errors.reviews : null}
        </div>
        <div>
          <div>
            <FormLabel className="ms-2 mt-auto mb-auto">
              Related Products :-
            </FormLabel>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 690 }}>
              <Select
                placeholder="Select Related Product"
                name="related_product"
                type="text"
                maxrows={4}
                value={values.related_product}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              >
                <MenuItem value="default" selected disabled>
                  Select Related Product
                </MenuItem>
                {Related_Products.map((item, index) => {
                  return (
                    <MenuItem value={item.name} key={index}>
                      {item.name}
                    </MenuItem>
                  );
                })}
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ color: "red" }}>
          {errors.related_product && touched.related_product
            ? errors.related_product
            : null}
        </div>
        <div>
          <div>
            <FormLabel className="ms-2 mt-auto mb-auto">FAQS :-</FormLabel>
          </div>
          <div>
            <TextField
              placeholder="FAQS"
              name="faqs"
              type="text"
              maxrows={4}
              value={values.faqs}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
          </div>
        </div>

        <div>
          <div>
            <FormLabel className="mt-auto mb-auto">Warranty :-</FormLabel>
          </div>
          <div>
            <TextArea
              name="warranty"
              type="text"
              maxrows={4}
              value={values.warranty}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              cols={100}
              className="w-auto"
            />
          </div>
        </div>

        <div>
          <div>
            <FormLabel className="mt-auto mb-auto">Return Policy :-</FormLabel>
          </div>
          <div>
            <TextArea
              name="return_policy"
              type="text"
              maxrows={4}
              value={values.return_policy}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              cols={100}
              className="w-auto"
            />
          </div>
        </div>

        <div>
          <Button
            variant="outlined"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            ADD Product
          </Button>
        </div>
      </Box>
    </form>
    </Dashboard>
</>

  );
}

