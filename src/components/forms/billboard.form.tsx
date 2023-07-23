"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { Textarea } from "components/ui/textarea";
// import { toast } from "components/ui/use-toast"
import {
  BillboardFormValues,
  billboardSchema,
} from "lib/schemas/billboard.schema";
import { Icons, Icon } from "components/icons";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "components/ui/command";
import Billboard from "components/billboards/index";
import DbData from "_mock/databases";
import TBData from "_mock/tables";
import FData from "_mock/fields";
import FormulasData from "_mock/formulas";

const defaultValues: Partial<BillboardFormValues> = {
  billboard_icon: Object.keys(Icons)[0],
  billboard_title_en: "",
  billboard_title_ar: "",
  metric_type: "field",
};

export function BillboardForm() {
  const form = useForm<BillboardFormValues>({
    resolver: zodResolver(billboardSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: BillboardFormValues) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }
  console.log(form.watch("metric_type"));
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-2">
          <div className="p-1 grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="billboard_title_en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Billboard Title English</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write billboard english title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billboard_title_ar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Billboard Title Arabic</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write billboard arabic title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billboard_icon"
              render={({ field }) => {
                const TargetIcon: Icon = Icons[field.value];
                return (
                  <FormItem>
                    <FormLabel>Billboard icon</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="ml-auto w-full">
                            <TargetIcon className="mr-2" /> {field.value}
                            <Icons.chevronDown className="ml-2 h-4 w-4 text-muted-foreground right-0" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="p-0 dark:bg-black dark:border-gray-900"
                          align="end"
                        >
                          <Command className="z-8">
                            <CommandInput placeholder="Select billboard icon." />
                            <CommandList>
                              <CommandEmpty>No roles found.</CommandEmpty>
                              <CommandGroup>
                                {Object.keys(Icons).map((a) => {
                                  const ListIcon: Icon = Icons[a];
                                  return (
                                    <CommandItem
                                      key={a + "_iconlist"}
                                      className="teamaspace-y-1 flex flex-col items-start px-4 py-2 cursor-pointer hover:dark:bg-gray-900"
                                      onSelect={() => {
                                        form.setValue("billboard_icon", a);
                                      }}
                                    >
                                      <span className="flex inline justify-center items-center">
                                        {" "}
                                        <ListIcon />{" "}
                                        <span className="ml-2"> {a}</span>
                                      </span>
                                    </CommandItem>
                                  );
                                })}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="metric_type"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Metric Type</FormLabel>
                    <FormControl>
                      <Select {...field} onValueChange={field.onChange as any}>
                        <SelectTrigger className="h-8 w-full">
                          <SelectValue placeholder={field.value} />
                        </SelectTrigger>
                        <SelectContent side="bottom">
                          {["formula", "field"].map((a) => (
                            <SelectItem key={"metric_type_" + a} value={a}>
                              {a}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="db_id"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Source Database</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(e) => {
                          const db = DbData.find((a) => a.db_id === +e);
                          form.setValue("db_id", db.db_id);
                          form.setValue("db_name", db.db_name);
                        }}
                        value={`${field.value}`}
                      >
                        <SelectTrigger className="h-8 w-full">
                          <SelectValue placeholder={field.value} />
                        </SelectTrigger>
                        <SelectContent side="bottom">
                          {DbData.map((db) => (
                            <SelectItem
                              key={"db_" + db.db_id}
                              value={db.db_id.toString()}
                            >
                              {db.db_name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="table_id"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Source Table</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(e) => {
                          const db = TBData.find((a) => a.table_id === +e);
                          form.setValue("table_id", db.table_id);
                          form.setValue("table_name", db.table_name);
                        }}
                        value={`${field.value}`}
                      >
                        <SelectTrigger className="h-8 w-full">
                          <SelectValue placeholder={field.value} />
                        </SelectTrigger>
                        <SelectContent side="bottom">
                          {TBData.map((tb) => (
                            <SelectItem
                              key={"table_" + tb.table_id}
                              value={tb.table_id.toString()}
                            >
                              {tb.table_name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {form.watch("metric_type") === "field" ? (
              <FormField
                control={form.control}
                name="metric_field"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Table Field</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(e) => {
                            const f = FData.find((a) => a.field_id === +e);
                            form.setValue("metric_field", f.field_name);
                          }}
                          value={`${field.value}`}
                        >
                          <SelectTrigger className="h-8 w-full">
                            <SelectValue placeholder={field.value} />
                          </SelectTrigger>
                          <SelectContent side="bottom">
                            {FData.map((f) => (
                              <SelectItem
                                key={"db_" + f.field_id}
                                value={f.field_id.toString()}
                              >
                                {f.field_name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            ) : (
              <FormField
                control={form.control}
                name="formula_id"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Formula</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(e) => {
                            const f = FormulasData.find(
                              (a) => a.formula_id === +e
                            );
                            form.setValue("formula_id", f.formula_id);
                          }}
                          value={`${field.value}`}
                        >
                          <SelectTrigger className="h-8 w-full">
                            <SelectValue placeholder={field.value} />
                          </SelectTrigger>
                          <SelectContent side="bottom">
                            {FormulasData.map((f) => (
                              <SelectItem
                                key={"db_" + f.formula_id}
                                value={f.formula_id.toString()}
                              >
                                {f.formula_name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            )}
          </div>
          <div className="items-center w-full px-64 mt-8">
            <Billboard
              title={form.watch("billboard_title_en")}
              icon={Icons[form.watch("billboard_icon")]}
              subtitle={"2"}
            />
          </div>
        </div>
        <div className="flex w-full justify-end ">
          <Button type="submit">Create BillBoard</Button>
        </div>
      </form>
    </Form>
  );
}
