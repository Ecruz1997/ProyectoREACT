// ✅ Client Component — usa useState y custom hook para validación de formularios
"use client";
import { useFormValidation } from "@/hooks";
import { useState } from "react";
import type { Recipe } from "../types";

const initialValues: Omit<Recipe, "id"> = {
  title: "",
  descriptionIngredientes: "",
  descriptionPreparacion: "",
  ilustracion: "",
};

function validate(values: typeof initialValues) {
  const errors: Partial<Record<keyof typeof initialValues, string>> = {};
  if (!values.title) errors.title = "El título es obligatorio";
  if (!values.descriptionIngredientes) errors.descriptionIngredientes = "Los ingredientes son obligatorios";
  if (!values.descriptionPreparacion) errors.descriptionPreparacion = "La preparación es obligatoria";
  return errors;
}

export function NewRecipePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { values, errors, handleChange, handleBlur } = useFormValidation(initialValues, validate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Aquí puedes agregar la lógica para guardar la receta
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const isFormValid =
    values.title.trim() !== "" &&
    values.descriptionIngredientes.trim() !== "" &&
    values.descriptionPreparacion.trim() !== "" &&
    Object.keys(errors).length === 0;

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 480,
        margin: "2rem auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 12px #0001",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <h2 style={{
        background: "#F54927",
        color: "#fff",
        borderRadius: 8,
        padding: "1rem 0",
        textAlign: "center",
        marginBottom: 8,
      }}>Nueva Receta</h2>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}>
        <label style={{
          fontWeight: 600,
          color: "#004225",
        }}>Título</label>
        <input
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #e0e0e0",
          }}
        />
        {errors.title && <span style={{
          color: "#F54927",
          fontSize: 13,
        }}>{errors.title}</span>}
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}>
        <label style={{
          fontWeight: 600,
          color: "#e4730a",
        }}>Ingredientes</label>
        <textarea
          name="descriptionIngredientes"
          value={values.descriptionIngredientes}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #e0e0e0",
            minHeight: 60,
          }}
        />
        {errors.descriptionIngredientes && <span style={{
          color: "#F54927",
          fontSize: 13,
        }}>{errors.descriptionIngredientes}</span>}
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}>
        <label style={{
          fontWeight: 600,
          color: "#dfca13",
        }}>Preparación</label>
        <textarea
          name="descriptionPreparacion"
          value={values.descriptionPreparacion}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #e0e0e0",
            minHeight: 60,
          }}
        />
        {errors.descriptionPreparacion && <span style={{
          color: "#F54927",
          fontSize: 13,
        }}>{errors.descriptionPreparacion}</span>}
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}>
        <label style={{
          fontWeight: 600,
          color: "#004225",
        }}>Ilustración (URL)</label>
        <input
          name="ilustracion"
          value={values.ilustracion as string}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #e0e0e0",
          }}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting || !isFormValid}
        style={{
          background: "#F54927",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "12px 0",
          fontWeight: 700,
          fontSize: 16,
          cursor: isSubmitting || !isFormValid ? "not-allowed" : "pointer",
          marginTop: 12,
        }}
      >
        {isSubmitting ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
}