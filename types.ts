
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Step {
  number: string;
  title: string;
}