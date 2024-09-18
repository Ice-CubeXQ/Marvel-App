import { useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage as FormikErrorMessage } from "formik";

import useMarvelService from "../../services/MarvelService";
import { ErrorMessage } from "formik";

import "./charSearchForm.scss";

const CharSearchForm = () => {
  const [char, setChar] = useState(null);
  const { getCharacterByName, clearError, process, setProcess } = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  };
  const updateChar = (name) => {
    clearError();

    getCharacterByName(name)
      .then(onCharLoaded)
      .then(() => {
        setProcess("confirmed");
      });
  };

  const results = !char ? null : char.length > 0 ? (
    <div className="char__search-wrapper">
      <div className="char__search-success">There is! Visit {char[0].name} page?</div>
      <Link className="button button__secondary" to={`/characters/${char[0].id}`}>
        <div className="inner">To page</div>
      </Link>
    </div>
  ) : (
    <div className="char__search-error">The character was not found. Check the name and try again</div>
  );
  const errorMessage =
    process === "error" ? (
      <div>
        <ErrorMessage className="char__search-critical-error" />
      </div>
    ) : null;

  return (
    <div className="char__search-form">
      <Formik
        initialValues={{ charName: "" }}
        validationSchema={Yup.object({
          charName: Yup.string().required("This field is required"),
        })}
        onSubmit={({ charName }) => {
          updateChar(charName);
        }}
      >
        <Form>
          <label className="char__search-label" htmlFor="charName">
            Or find a character by name:
          </label>
          <div className="char__search-wrapper">
            <Field id="charName" name="charName" type="text" placeholder="Enter name" />
            <button type="submit" className="button button__main" disabled={process === "loading"}>
              <div className="inner">find</div>
            </button>
          </div>
          <FormikErrorMessage component="div" className="char__search-error" name="charName" />
        </Form>
      </Formik>
      {results}
      {errorMessage}
    </div>
  );
};

export default CharSearchForm;
