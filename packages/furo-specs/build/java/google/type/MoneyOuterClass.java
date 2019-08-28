// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: google/type/money.proto

package google.type;

public final class MoneyOuterClass {
  private MoneyOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface MoneyOrBuilder extends
      // @@protoc_insertion_point(interface_extends:google.type.Money)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <pre>
     * The 3-letter currency code defined in ISO 4217.
     * </pre>
     *
     * <code>string currency_code = 2;</code>
     */
    java.lang.String getCurrencyCode();
    /**
     * <pre>
     * The 3-letter currency code defined in ISO 4217.
     * </pre>
     *
     * <code>string currency_code = 2;</code>
     */
    com.google.protobuf.ByteString
        getCurrencyCodeBytes();

    /**
     * <pre>
     * String representation of money entity
     * </pre>
     *
     * <code>string display_name = 1;</code>
     */
    java.lang.String getDisplayName();
    /**
     * <pre>
     * String representation of money entity
     * </pre>
     *
     * <code>string display_name = 1;</code>
     */
    com.google.protobuf.ByteString
        getDisplayNameBytes();

    /**
     * <pre>
     * Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     * </pre>
     *
     * <code>int64 nanos = 4;</code>
     */
    long getNanos();

    /**
     * <pre>
     * The whole units of the amount.
     * </pre>
     *
     * <code>int64 units = 3;</code>
     */
    long getUnits();
  }
  /**
   * <pre>
   * Represents an amount of money with its currency type. https://github.com/googleapis/googleapis/blob/master/google/money.proto
   * </pre>
   *
   * Protobuf type {@code google.type.Money}
   */
  public  static final class Money extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:google.type.Money)
      MoneyOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use Money.newBuilder() to construct.
    private Money(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private Money() {
      currencyCode_ = "";
      displayName_ = "";
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private Money(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      int mutable_bitField0_ = 0;
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              java.lang.String s = input.readStringRequireUtf8();

              displayName_ = s;
              break;
            }
            case 18: {
              java.lang.String s = input.readStringRequireUtf8();

              currencyCode_ = s;
              break;
            }
            case 24: {

              units_ = input.readInt64();
              break;
            }
            case 32: {

              nanos_ = input.readInt64();
              break;
            }
            default: {
              if (!parseUnknownField(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return google.type.MoneyOuterClass.internal_static_google_type_Money_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return google.type.MoneyOuterClass.internal_static_google_type_Money_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              google.type.MoneyOuterClass.Money.class, google.type.MoneyOuterClass.Money.Builder.class);
    }

    public static final int CURRENCY_CODE_FIELD_NUMBER = 2;
    private volatile java.lang.Object currencyCode_;
    /**
     * <pre>
     * The 3-letter currency code defined in ISO 4217.
     * </pre>
     *
     * <code>string currency_code = 2;</code>
     */
    public java.lang.String getCurrencyCode() {
      java.lang.Object ref = currencyCode_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        currencyCode_ = s;
        return s;
      }
    }
    /**
     * <pre>
     * The 3-letter currency code defined in ISO 4217.
     * </pre>
     *
     * <code>string currency_code = 2;</code>
     */
    public com.google.protobuf.ByteString
        getCurrencyCodeBytes() {
      java.lang.Object ref = currencyCode_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        currencyCode_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int DISPLAY_NAME_FIELD_NUMBER = 1;
    private volatile java.lang.Object displayName_;
    /**
     * <pre>
     * String representation of money entity
     * </pre>
     *
     * <code>string display_name = 1;</code>
     */
    public java.lang.String getDisplayName() {
      java.lang.Object ref = displayName_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        displayName_ = s;
        return s;
      }
    }
    /**
     * <pre>
     * String representation of money entity
     * </pre>
     *
     * <code>string display_name = 1;</code>
     */
    public com.google.protobuf.ByteString
        getDisplayNameBytes() {
      java.lang.Object ref = displayName_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        displayName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int NANOS_FIELD_NUMBER = 4;
    private long nanos_;
    /**
     * <pre>
     * Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     * </pre>
     *
     * <code>int64 nanos = 4;</code>
     */
    public long getNanos() {
      return nanos_;
    }

    public static final int UNITS_FIELD_NUMBER = 3;
    private long units_;
    /**
     * <pre>
     * The whole units of the amount.
     * </pre>
     *
     * <code>int64 units = 3;</code>
     */
    public long getUnits() {
      return units_;
    }

    private byte memoizedIsInitialized = -1;
    @java.lang.Override
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    @java.lang.Override
    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (!getDisplayNameBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 1, displayName_);
      }
      if (!getCurrencyCodeBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 2, currencyCode_);
      }
      if (units_ != 0L) {
        output.writeInt64(3, units_);
      }
      if (nanos_ != 0L) {
        output.writeInt64(4, nanos_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (!getDisplayNameBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, displayName_);
      }
      if (!getCurrencyCodeBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, currencyCode_);
      }
      if (units_ != 0L) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt64Size(3, units_);
      }
      if (nanos_ != 0L) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt64Size(4, nanos_);
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof google.type.MoneyOuterClass.Money)) {
        return super.equals(obj);
      }
      google.type.MoneyOuterClass.Money other = (google.type.MoneyOuterClass.Money) obj;

      if (!getCurrencyCode()
          .equals(other.getCurrencyCode())) return false;
      if (!getDisplayName()
          .equals(other.getDisplayName())) return false;
      if (getNanos()
          != other.getNanos()) return false;
      if (getUnits()
          != other.getUnits()) return false;
      if (!unknownFields.equals(other.unknownFields)) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + CURRENCY_CODE_FIELD_NUMBER;
      hash = (53 * hash) + getCurrencyCode().hashCode();
      hash = (37 * hash) + DISPLAY_NAME_FIELD_NUMBER;
      hash = (53 * hash) + getDisplayName().hashCode();
      hash = (37 * hash) + NANOS_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          getNanos());
      hash = (37 * hash) + UNITS_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          getUnits());
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static google.type.MoneyOuterClass.Money parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static google.type.MoneyOuterClass.Money parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static google.type.MoneyOuterClass.Money parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static google.type.MoneyOuterClass.Money parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static google.type.MoneyOuterClass.Money parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static google.type.MoneyOuterClass.Money parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static google.type.MoneyOuterClass.Money parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static google.type.MoneyOuterClass.Money parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static google.type.MoneyOuterClass.Money parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static google.type.MoneyOuterClass.Money parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static google.type.MoneyOuterClass.Money parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static google.type.MoneyOuterClass.Money parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    @java.lang.Override
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(google.type.MoneyOuterClass.Money prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    @java.lang.Override
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * <pre>
     * Represents an amount of money with its currency type. https://github.com/googleapis/googleapis/blob/master/google/money.proto
     * </pre>
     *
     * Protobuf type {@code google.type.Money}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:google.type.Money)
        google.type.MoneyOuterClass.MoneyOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return google.type.MoneyOuterClass.internal_static_google_type_Money_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return google.type.MoneyOuterClass.internal_static_google_type_Money_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                google.type.MoneyOuterClass.Money.class, google.type.MoneyOuterClass.Money.Builder.class);
      }

      // Construct using google.type.MoneyOuterClass.Money.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        currencyCode_ = "";

        displayName_ = "";

        nanos_ = 0L;

        units_ = 0L;

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return google.type.MoneyOuterClass.internal_static_google_type_Money_descriptor;
      }

      @java.lang.Override
      public google.type.MoneyOuterClass.Money getDefaultInstanceForType() {
        return google.type.MoneyOuterClass.Money.getDefaultInstance();
      }

      @java.lang.Override
      public google.type.MoneyOuterClass.Money build() {
        google.type.MoneyOuterClass.Money result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public google.type.MoneyOuterClass.Money buildPartial() {
        google.type.MoneyOuterClass.Money result = new google.type.MoneyOuterClass.Money(this);
        result.currencyCode_ = currencyCode_;
        result.displayName_ = displayName_;
        result.nanos_ = nanos_;
        result.units_ = units_;
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof google.type.MoneyOuterClass.Money) {
          return mergeFrom((google.type.MoneyOuterClass.Money)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(google.type.MoneyOuterClass.Money other) {
        if (other == google.type.MoneyOuterClass.Money.getDefaultInstance()) return this;
        if (!other.getCurrencyCode().isEmpty()) {
          currencyCode_ = other.currencyCode_;
          onChanged();
        }
        if (!other.getDisplayName().isEmpty()) {
          displayName_ = other.displayName_;
          onChanged();
        }
        if (other.getNanos() != 0L) {
          setNanos(other.getNanos());
        }
        if (other.getUnits() != 0L) {
          setUnits(other.getUnits());
        }
        this.mergeUnknownFields(other.unknownFields);
        onChanged();
        return this;
      }

      @java.lang.Override
      public final boolean isInitialized() {
        return true;
      }

      @java.lang.Override
      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        google.type.MoneyOuterClass.Money parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (google.type.MoneyOuterClass.Money) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private java.lang.Object currencyCode_ = "";
      /**
       * <pre>
       * The 3-letter currency code defined in ISO 4217.
       * </pre>
       *
       * <code>string currency_code = 2;</code>
       */
      public java.lang.String getCurrencyCode() {
        java.lang.Object ref = currencyCode_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          currencyCode_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <pre>
       * The 3-letter currency code defined in ISO 4217.
       * </pre>
       *
       * <code>string currency_code = 2;</code>
       */
      public com.google.protobuf.ByteString
          getCurrencyCodeBytes() {
        java.lang.Object ref = currencyCode_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          currencyCode_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <pre>
       * The 3-letter currency code defined in ISO 4217.
       * </pre>
       *
       * <code>string currency_code = 2;</code>
       */
      public Builder setCurrencyCode(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        currencyCode_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * The 3-letter currency code defined in ISO 4217.
       * </pre>
       *
       * <code>string currency_code = 2;</code>
       */
      public Builder clearCurrencyCode() {
        
        currencyCode_ = getDefaultInstance().getCurrencyCode();
        onChanged();
        return this;
      }
      /**
       * <pre>
       * The 3-letter currency code defined in ISO 4217.
       * </pre>
       *
       * <code>string currency_code = 2;</code>
       */
      public Builder setCurrencyCodeBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        currencyCode_ = value;
        onChanged();
        return this;
      }

      private java.lang.Object displayName_ = "";
      /**
       * <pre>
       * String representation of money entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public java.lang.String getDisplayName() {
        java.lang.Object ref = displayName_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          displayName_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <pre>
       * String representation of money entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public com.google.protobuf.ByteString
          getDisplayNameBytes() {
        java.lang.Object ref = displayName_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          displayName_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <pre>
       * String representation of money entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public Builder setDisplayName(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        displayName_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * String representation of money entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public Builder clearDisplayName() {
        
        displayName_ = getDefaultInstance().getDisplayName();
        onChanged();
        return this;
      }
      /**
       * <pre>
       * String representation of money entity
       * </pre>
       *
       * <code>string display_name = 1;</code>
       */
      public Builder setDisplayNameBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        displayName_ = value;
        onChanged();
        return this;
      }

      private long nanos_ ;
      /**
       * <pre>
       * Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
       * </pre>
       *
       * <code>int64 nanos = 4;</code>
       */
      public long getNanos() {
        return nanos_;
      }
      /**
       * <pre>
       * Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
       * </pre>
       *
       * <code>int64 nanos = 4;</code>
       */
      public Builder setNanos(long value) {
        
        nanos_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * Number of nano (10^-9) units of the amount. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
       * </pre>
       *
       * <code>int64 nanos = 4;</code>
       */
      public Builder clearNanos() {
        
        nanos_ = 0L;
        onChanged();
        return this;
      }

      private long units_ ;
      /**
       * <pre>
       * The whole units of the amount.
       * </pre>
       *
       * <code>int64 units = 3;</code>
       */
      public long getUnits() {
        return units_;
      }
      /**
       * <pre>
       * The whole units of the amount.
       * </pre>
       *
       * <code>int64 units = 3;</code>
       */
      public Builder setUnits(long value) {
        
        units_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * The whole units of the amount.
       * </pre>
       *
       * <code>int64 units = 3;</code>
       */
      public Builder clearUnits() {
        
        units_ = 0L;
        onChanged();
        return this;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFields(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:google.type.Money)
    }

    // @@protoc_insertion_point(class_scope:google.type.Money)
    private static final google.type.MoneyOuterClass.Money DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new google.type.MoneyOuterClass.Money();
    }

    public static google.type.MoneyOuterClass.Money getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<Money>
        PARSER = new com.google.protobuf.AbstractParser<Money>() {
      @java.lang.Override
      public Money parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new Money(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<Money> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<Money> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public google.type.MoneyOuterClass.Money getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_google_type_Money_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_google_type_Money_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\027google/type/money.proto\022\013google.type\"R" +
      "\n\005Money\022\025\n\rcurrency_code\030\002 \001(\t\022\024\n\014displa" +
      "y_name\030\001 \001(\t\022\r\n\005nanos\030\004 \001(\003\022\r\n\005units\030\003 \001" +
      "(\003b\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_google_type_Money_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_google_type_Money_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_google_type_Money_descriptor,
        new java.lang.String[] { "CurrencyCode", "DisplayName", "Nanos", "Units", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
