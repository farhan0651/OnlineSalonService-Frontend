import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Col, Button, Container, Alert} from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from "axios";
import { TitleWrapper } from "./styled";

function BookAppointment({customerId}){
    const [isLoading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    // const [formErrors, setFormErrors] = useState({
    //     location:null,
    //     inspectionType:null,
    //     preferredDate:null,
    //     preferredTime:null
    // });

    // form value handler
    const initialvalues = {
        location:"",
        visitType:"",
        preferredDate:"",
        preferredTime:"",
        customer:{
            customerId:customerId
        },
        salonService:{
            serviceId:1
        },
        payment:{
            paymentId:1
        }
    }
    // Validation schema
    const bookAppointmentValidationSchema = Yup.object().shape({
        location: Yup.string().required("location is required"),
                    //.test("backend_location",formErrors.location,()=>Boolean(!formErrors.location)),
        visitType: Yup.string().required("Inspection is required"),
        preferredDate: Yup.date().required("Date is required")
                        .min(new Date(),"Date must be in future")
                        .max(new Date(new Date().getFullYear()+2, new Date().getMonth()), "Date must be within a year"),
        preferredTime:Yup.string().required("Time is required")
                    .test("valid_time", 
                        "Select time between 5 AM And 6 PM", 
                        function(timeValue){
                            if(timeValue > "05:00" && timeValue < "18:00")
                                return true;
                            return false;
                        }
                    )
    });

    useEffect(()=>{
        setErrorMessage();
        axios.get("http://localhost:8000/appointment/getAll")
        .then(data=>{
            console.log("second")
            console.log(data);
        }).catch(err=>setLoading(false));
    },[])

    // Form submit handler
    const onFormSubmit = (formValues)=>{
        //e.preventDefault();
        console.log("Form Submit:");
        console.log(formValues);
        axios.post(`http://localhost:8000/appointment/addAppointment`, formValues)
        .then(resp=>{
            console.log("db updated...");
            console.log(resp.data);
        }).catch(err=>{
            console.error(err.response);
            if(err.response.data && err.response.data.message){
                setErrorMessage(err.response.data.message);
                //setFormErrors(err.response.data);
            }
        });
    }
    return (
        <Container className="col-md-4" data-testid='baseContainer'>
            <TitleWrapper><h2>Book Appointment</h2></TitleWrapper>
            <div>
                {/* <h4>Car Details </h4> */}
                {/* <CarView carId={customerId} /> */}
                <h4>Appointment Details</h4>

                <Formik 
                    initialValues={initialvalues}
                    validationSchema={bookAppointmentValidationSchema}
                    onSubmit={onFormSubmit}
                >

                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                <Form noValidate onSubmit={handleSubmit} data-testid="formikForm">
                    <Form.Group as={Col} className="mb-4"  controlId="location">
                    <Form.Label>Appointment Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="location"
                        value={values.location}
                        onChange={handleChange}
                        isValid={touched.location && !errors.location}
                        isInvalid={!!errors.location && touched.location}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.location}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-4"  controlId="visitType">
                    <Form.Label>Visit Type</Form.Label>
                    <Form.Check>
                    <Form.Check.Input
                        type="radio"
                        name="visitType"
                        value="home"
                        onChange={handleChange}
                        isValid={touched.visitType && !errors.visitType}
                        isInvalid={!!errors.visitType}
                    />
                    <Form.Check.Label>Open</Form.Check.Label>
                    </Form.Check>
                    <Form.Check>
                    <Form.Check.Input
                        type="radio"
                        name="visitType"
                        label="Visit"
                        value="visitType"
                        onChange={handleChange}
                        isInvalid={!!errors.visitType}
                    />
                    <Form.Check.Label>Close</Form.Check.Label>
                    <Form.Control.Feedback type="invalid">
                    {errors.visitType}
                    </Form.Control.Feedback>
                    </Form.Check>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-4" controlId="preferredDate">
                    <Form.Label>Preferred Date</Form.Label>
                    <Form.Control
                        data-testid="preferredDate"
                        type="date"
                        name="preferredDate"
                        value={values.preferredDate}
                        onChange={handleChange}
                        isValid={touched.preferredDate && !errors.preferredDate}
                        isInvalid={!!errors.preferredDate && touched.preferredDate}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.preferredDate}
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-4" controlId="preferredTime">
                    <Form.Label>Preferred Time</Form.Label>
                    <Form.Control
                        data-testid="preferredTime"
                        type="time"
                        name="preferredTime"
                        value={values.preferredTime}
                        onChange={handleChange}
                        isValid={touched.preferredTime && !errors.preferredTime}
                        isInvalid={!!errors.preferredTime && touched.preferredTime}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.preferredTime}
                    </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Button type="submit" className="mb-4" >Submit</Button>
                </Form>
                )}
                </Formik>
            </div>
            <div className="mt-4">
                {errorMessage &&
                        <Alert variant="danger">
                    {errorMessage}
                    </Alert>
                }
            </div>  
        </Container>
    );
}

export default BookAppointment;